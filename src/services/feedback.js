// Envio do feedback para um Google Forms.
// As respostas ficam na planilha vinculada ao formulário.
const FORM_ID = "1FAIpQLSdK_s0NQFvw9XIZQ9A5HcTaxIOvzpdUdIopIFOMbICMshDGTw";
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

// Códigos de cada pergunta do formulário (do link pré-preenchido).
const FIELDS = {
    rating: "entry.1247613026",
    name: "entry.144328033",
    comment: "entry.484563583",
};

/**
 * Envia o feedback ao Google Forms.
 * O Google não permite ler a resposta (modo "no-cors"), então só é
 * possível detectar falhas de rede, não erros do próprio formulário.
 * @param {{ rating: number, name?: string, comment: string }} values
 */
export async function sendFeedback(values) {
    const body = new URLSearchParams();
    body.append(FIELDS.rating, String(values.rating));
    body.append(FIELDS.name, values.name ?? "");
    body.append(FIELDS.comment, values.comment);

    await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body,
    });
}