import { sendContactMeGetFormDataAction } from "@/app/actions/sendContactMeGetFormDataAction";

// Helper para mockar fetch globalmente
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("sendContactMeGetFormDataAction", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    mockFetch.mockReset();
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("deve lançar erro quando NEXTJS_CONTACT_WEBHOOK_URL não está configurada", async () => {
    delete process.env.NEXTJS_CONTACT_WEBHOOK_URL;

    await expect(
      sendContactMeGetFormDataAction("João", "joao@email.com", "Olá!")
    ).rejects.toThrow("NEXTJS_CONTACT_WEBHOOK_URL is not configured");
  });

  it("deve chamar fetch com a URL, método POST e body corretos", async () => {
    process.env.NEXTJS_CONTACT_WEBHOOK_URL = "https://webhook.example.com/contact";
    delete process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS;

    mockFetch.mockResolvedValue({ ok: true });

    await sendContactMeGetFormDataAction("Maria", "maria@email.com", "Mensagem de teste");

    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toBe("https://webhook.example.com/contact");
    expect(options.method).toBe("POST");
    expect(options.cache).toBe("no-store");
    expect(JSON.parse(options.body)).toEqual({
      name: "Maria",
      mail: "maria@email.com",
      message: "Mensagem de teste",
    });
  });

  it("deve incluir o header Content-Type: application/json por padrão", async () => {
    process.env.NEXTJS_CONTACT_WEBHOOK_URL = "https://webhook.example.com/contact";
    delete process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS;

    mockFetch.mockResolvedValue({ ok: true });

    await sendContactMeGetFormDataAction("João", "joao@email.com", "Olá");

    const [, options] = mockFetch.mock.calls[0];
    expect(options.headers.get("Content-Type")).toBe("application/json");
  });

  it("deve adicionar headers customizados quando NEXTJS_CONTACT_WEBHOOK_HEADERS está configurada", async () => {
    process.env.NEXTJS_CONTACT_WEBHOOK_URL = "https://webhook.example.com/contact";
    process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS = "X-Api-Key=my-secret-key,X-Source=portfolio";

    mockFetch.mockResolvedValue({ ok: true });

    await sendContactMeGetFormDataAction("João", "joao@email.com", "Olá");

    const [, options] = mockFetch.mock.calls[0];
    expect(options.headers.get("X-Api-Key")).toBe("my-secret-key");
    expect(options.headers.get("X-Source")).toBe("portfolio");
  });

  it("deve suportar header com valor que contém '='", async () => {
    process.env.NEXTJS_CONTACT_WEBHOOK_URL = "https://webhook.example.com/contact";
    process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS = "Authorization=Bearer token==";

    mockFetch.mockResolvedValue({ ok: true });

    await sendContactMeGetFormDataAction("João", "joao@email.com", "Olá");

    const [, options] = mockFetch.mock.calls[0];
    expect(options.headers.get("Authorization")).toBe("Bearer token==");
  });

  it("deve lançar erro quando configuração de header é inválida (sem '=')", async () => {
    process.env.NEXTJS_CONTACT_WEBHOOK_URL = "https://webhook.example.com/contact";
    process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS = "InvalidHeaderWithoutEquals";

    await expect(
      sendContactMeGetFormDataAction("João", "joao@email.com", "Olá")
    ).rejects.toThrow("Invalid webhook header configuration: InvalidHeaderWithoutEquals");
  });

  it("deve lançar erro quando configuração de header tem nome vazio", async () => {
    process.env.NEXTJS_CONTACT_WEBHOOK_URL = "https://webhook.example.com/contact";
    process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS = "=valor-sem-nome";

    await expect(
      sendContactMeGetFormDataAction("João", "joao@email.com", "Olá")
    ).rejects.toThrow("Invalid webhook header configuration");
  });

  it("deve lançar erro quando o webhook retorna HTTP status não-ok (ex: 500)", async () => {
    process.env.NEXTJS_CONTACT_WEBHOOK_URL = "https://webhook.example.com/contact";
    delete process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS;

    mockFetch.mockResolvedValue({ ok: false, status: 500 });

    await expect(
      sendContactMeGetFormDataAction("João", "joao@email.com", "Olá")
    ).rejects.toThrow("Contact webhook returned HTTP 500");
  });

  it("deve lançar erro quando o webhook retorna HTTP 401 (não autorizado)", async () => {
    process.env.NEXTJS_CONTACT_WEBHOOK_URL = "https://webhook.example.com/contact";
    delete process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS;

    mockFetch.mockResolvedValue({ ok: false, status: 401 });

    await expect(
      sendContactMeGetFormDataAction("João", "joao@email.com", "Olá")
    ).rejects.toThrow("Contact webhook returned HTTP 401");
  });

  it("deve resolver sem erro quando o webhook retorna HTTP 200", async () => {
    process.env.NEXTJS_CONTACT_WEBHOOK_URL = "https://webhook.example.com/contact";
    delete process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS;

    mockFetch.mockResolvedValue({ ok: true, status: 200 });

    await expect(
      sendContactMeGetFormDataAction("João", "joao@email.com", "Olá")
    ).resolves.toBeUndefined();
  });
});
