// Registro anônimo dos resultados da calculadora em um Google Forms.
// Os dados ficam na planilha vinculada e servem para a análise do projeto.

const FORM_ID = "1FAIpQLSdqnERR13uY9FLDvAQmJR836aY5QSB9v4Z1bKw6JVsWtbQpPA";
const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

// Códigos de cada pergunta do formulário (do link pré-preenchido).
const FIELDS = {
    planets: "entry.1287305589",
    level: "entry.2043336206",
    categories: {
        agua: "entry.666661043",
        energia: "entry.542765535",
        alimentacao: "entry.528593085",
        transporte: "entry.830854400",
        consumo: "entry.1886451719",
    },
    answers: {
        agua_banho: "entry.10415886",
        agua_reaproveitamento: "entry.1766181089",
        agua_torneira: "entry.1204448585",
        agua_oleo: "entry.1561271179",
        energia_uso: "entry.1978514262",
        energia_fonte: "entry.613011826",
        energia_lampadas: "entry.1948076591",
        energia_standby: "entry.169992276",
        alimentacao_dieta: "entry.2103878470",
        alimentacao_desperdicio: "entry.1808621820",
        alimentacao_origem: "entry.1055809796",
        alimentacao_ultraprocessados: "entry.1182539892",
        transporte_diario: "entry.1993545587",
        transporte_aviao: "entry.906881825",
        transporte_curto: "entry.347301820",
        transporte_carona: "entry.1869998713",
        consumo_reciclagem: "entry.1575016786",
        consumo_compras: "entry.841476411",
        consumo_volumosos: "entry.627098309",
        consumo_reutilizaveis: "entry.527094993",
    },
};

/**
   * Envia um resultado ao Google Forms, sem nenhum dado pessoal.
   * @param {object} result - o retorno de calculateFootprint
   * @param {Record<string, string>} answers - mapa questionId -> texto da alternativa escolhida
   */
export async function sendResult(result, answers) {
    const body = new URLSearchParams();

    const planets = Math.round(result.planets * 10) / 10;
    body.append(FIELDS.planets, planets.toLocaleString("pt-BR", { minimumFractionDigits: 1 }));
    body.append(FIELDS.level, result.level.label);

    result.byCategory.forEach((cat) => {
        body.append(FIELDS.categories[cat.key], String(cat.percent));
    });

    Object.entries(answers).forEach(([questionId, label]) => {
        body.append(FIELDS.answers[questionId], label);
    });

    await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body,
    });
}