"use server"

export async function sendContactMeGetFormDataAction(name: string, mail: string, message: string) {
  const webhookUrl = process.env.NEXTJS_CONTACT_WEBHOOK_URL;
  const configuredHeaders = process.env.NEXTJS_CONTACT_WEBHOOK_HEADERS;

  if (!webhookUrl) {
    throw new Error("NEXTJS_CONTACT_WEBHOOK_URL is not configured");
  }

  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (configuredHeaders) {
    for (const configuredHeader of configuredHeaders.split(",")) {
      const separatorIndex = configuredHeader.indexOf("=");
      const headerName = configuredHeader.slice(0, separatorIndex).trim();
      const headerValue = configuredHeader.slice(separatorIndex + 1).trim();

      if (separatorIndex <= 0 || !headerName || !headerValue) {
        throw new Error(`Invalid webhook header configuration: ${configuredHeader}`);
      }

      headers.set(headerName, headerValue);
    }
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({ name, mail, message }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Contact webhook returned HTTP ${response.status}`);
  }
}
