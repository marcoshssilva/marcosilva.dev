import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor, act } from "@testing-library/react";
import SectionContactMe from "@/app/components/section-contact-me/SectionContactMe";

// Usa o alias @/ igual ao que o componente usa, para que o Jest intercepte o mesmo módulo.
// O clearMocks: true no jest.config.ts já garante reset entre testes.
jest.mock("@/app/actions/sendContactMeGetFormDataAction", () => ({
  sendContactMeGetFormDataAction: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { sendContactMeGetFormDataAction } = require("@/app/actions/sendContactMeGetFormDataAction");
const mockSendAction = sendContactMeGetFormDataAction as jest.MockedFunction<
  typeof sendContactMeGetFormDataAction
>;

describe("SectionContactMe", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar o formulário com campos Nome, Email e Mensagem", () => {
    render(<SectionContactMe />);

    expect(screen.getByLabelText(/Seu Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seu Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Envie-me uma mensagem/i })).toBeInTheDocument();
  });

  it("deve renderizar o título da seção #Contate-me", () => {
    render(<SectionContactMe />);
    expect(screen.getByText("#Contate-me")).toBeInTheDocument();
  });

  it("não deve exibir o alert de sucesso inicialmente", () => {
    render(<SectionContactMe />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  describe("validateFieldNome", () => {
    /**
     * Nota: o componente usa stale closure — validateFieldNome lê o estado 'nome'
     * do render anterior. Por isso, ao mudar o campo pela primeira vez, o closure
     * ainda lê o estado vazio ("") e seta erro = true, independente do valor digitado.
     */
    it("deve marcar erro quando nome tem menos de 3 caracteres", async () => {
      render(<SectionContactMe />);
      const nomeInput = screen.getByLabelText(/Seu Nome/i);

      await act(async () => {
        fireEvent.change(nomeInput, { target: { value: "AB", trimStart: () => "AB" } });
      });

      expect(nomeInput).toHaveAttribute("aria-invalid", "true");
    });

    it("deve marcar erro na primeira digitação mesmo com nome longo (stale closure lê estado anterior)", async () => {
      render(<SectionContactMe />);
      const nomeInput = screen.getByLabelText(/Seu Nome/i);

      // Estado 'nome' ainda é "" no closure → sempre marca erro na primeira troca
      await act(async () => {
        fireEvent.change(nomeInput, { target: { value: "João Silva", trimStart: () => "João Silva" } });
      });

      expect(nomeInput).toHaveAttribute("aria-invalid", "true");
    });
  });

  describe("validateFieldEmail", () => {
    it("deve marcar erro quando email tem menos de 6 caracteres e é inválido", async () => {
      render(<SectionContactMe />);
      const emailInput = screen.getByLabelText(/Seu Email/i);

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "a@b", trimStart: () => "a@b" } });
      });

      expect(emailInput).toHaveAttribute("aria-invalid", "true");
    });
  });

  describe("validateFieldMensagem", () => {
    it("deve marcar erro quando mensagem tem menos de 2 caracteres", async () => {
      render(<SectionContactMe />);
      const mensagemInput = screen.getByLabelText(/Mensagem/i);

      await act(async () => {
        fireEvent.change(mensagemInput, { target: { value: "O", trimStart: () => "O" } });
      });

      expect(mensagemInput).toHaveAttribute("aria-invalid", "true");
    });

    it("deve marcar erro na primeira digitação mesmo com mensagem longa (stale closure lê estado anterior)", async () => {
      render(<SectionContactMe />);
      const mensagemInput = screen.getByLabelText(/Mensagem/i);

      // Estado 'mensagem' ainda é "" no closure → sempre marca erro na primeira troca
      await act(async () => {
        fireEvent.change(mensagemInput, { target: { value: "Olá!", trimStart: () => "Olá!" } });
      });

      expect(mensagemInput).toHaveAttribute("aria-invalid", "true");
    });
  });

  describe("onSubmitContactMe", () => {
    it("deve chamar sendContactMeGetFormDataAction quando formulário é válido", async () => {
      mockSendAction.mockResolvedValue(undefined);
      render(<SectionContactMe />);

      await act(async () => {
        fireEvent.change(screen.getByLabelText(/Seu Nome/i), {
          target: { value: "João Silva", trimStart: () => "João Silva" },
        });
        fireEvent.change(screen.getByLabelText(/Seu Email/i), {
          target: { value: "joao@email.com", trimStart: () => "joao@email.com" },
        });
        fireEvent.change(screen.getByLabelText(/Mensagem/i), {
          target: { value: "Olá, gostaria de entrar em contato!", trimStart: () => "Olá, gostaria de entrar em contato!" },
        });
      });

      const form = screen.getByRole("button", { name: /Envie-me uma mensagem/i }).closest("form")!;
      await act(async () => {
        fireEvent.submit(form);
      });

      await waitFor(() => {
        expect(mockSendAction).toHaveBeenCalledWith(
          "João Silva",
          "joao@email.com",
          "Olá, gostaria de entrar em contato!"
        );
      });
    });

    it("deve exibir alerta de sucesso após envio bem-sucedido", async () => {
      mockSendAction.mockResolvedValue(undefined);
      render(<SectionContactMe />);

      await act(async () => {
        fireEvent.change(screen.getByLabelText(/Seu Nome/i), {
          target: { value: "João Silva", trimStart: () => "João Silva" },
        });
        fireEvent.change(screen.getByLabelText(/Seu Email/i), {
          target: { value: "joao@email.com", trimStart: () => "joao@email.com" },
        });
        fireEvent.change(screen.getByLabelText(/Mensagem/i), {
          target: { value: "Mensagem de teste", trimStart: () => "Mensagem de teste" },
        });
      });

      const form = screen.getByRole("button", { name: /Envie-me uma mensagem/i }).closest("form")!;
      await act(async () => {
        fireEvent.submit(form);
      });

      await waitFor(() => {
        expect(screen.getByRole("alert")).toBeInTheDocument();
        expect(screen.getByText(/Muito obrigado pela sua mensagem/i)).toBeInTheDocument();
      });
    });

    it("deve fechar o alerta ao clicar no botão de fechar", async () => {
      mockSendAction.mockResolvedValue(undefined);
      render(<SectionContactMe />);

      await act(async () => {
        fireEvent.change(screen.getByLabelText(/Seu Nome/i), {
          target: { value: "João Silva", trimStart: () => "João Silva" },
        });
        fireEvent.change(screen.getByLabelText(/Seu Email/i), {
          target: { value: "joao@email.com", trimStart: () => "joao@email.com" },
        });
        fireEvent.change(screen.getByLabelText(/Mensagem/i), {
          target: { value: "Mensagem de teste", trimStart: () => "Mensagem de teste" },
        });
      });

      const form = screen.getByRole("button", { name: /Envie-me uma mensagem/i }).closest("form")!;
      await act(async () => {
        fireEvent.submit(form);
      });

      await waitFor(() => {
        expect(screen.getByRole("alert")).toBeInTheDocument();
      });

      const closeButton = screen.getByTitle(/Close/i);
      await act(async () => {
        fireEvent.click(closeButton);
      });

      await waitFor(() => {
        expect(screen.queryByRole("alert")).not.toBeInTheDocument();
      });
    });
  });
});
