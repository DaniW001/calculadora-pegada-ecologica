import { CATEGORIES, MIN_SCORE, MAX_SCORE, TOTAL_QUESTIONS } from "../data/questions";

// Dicas de redução de impacto, organizadas por categoria.
// São exibidas priorizando as categorias com pior pontuação do usuário.

export const TIPS = {
    agua: [
        "Reduza o tempo de banho para até 5–10 minutos.",
        "Feche a torneira ao escovar os dentes ou ensaboar a louça.",
        "Reaproveite a água da máquina de lavar ou do banho para limpeza e plantas.",
        "Conserte vazamentos assim que forem identificados.",
    ],
    energia: [
        "Troque lâmpadas comuns por lâmpadas de LED.",
        "Desligue aparelhos e luzes de cômodos vazios.",
        "Aproveite a luz natural durante o dia.",
        "Avalie o uso de energia solar, quando possível.",
    ],
    alimentacao: [
        "Reduza o consumo de carne, mesmo que gradualmente (ex.: 1-2 dias por semana sem carne).",
        "Planeje as compras para evitar desperdício de alimentos.",
        "Dê preferência a alimentos locais e da estação.",
        "Reaproveite sobras de comida em novas receitas.",
    ],
    transporte: [
        "Priorize caminhada, bicicleta ou transporte público sempre que possível.",
        "Combine caronas com colegas, amigos ou vizinhos.",
        "Mantenha o veículo com manutenção em dia para reduzir emissões.",
        "Avalie a real necessidade de cada viagem aérea.",
    ],
    consumo: [
        "Separe corretamente o lixo reciclável.",
        "Prefira comprar menos e de melhor qualidade, priorizando durabilidade.",
        "Doe, troque ou conserte itens em vez de descartá-los.",
        "Leve sacolas e potes reutilizáveis às compras.",
    ],
};

const LEVELS = [
    {
        max: 1.8,
        label: "Baixo impacto",
        color: "#2e7d32",
        summary:
            "Seus hábitos já estão bem alinhados com um estilo de vida sustentável. Continue assim e inspire outras pessoas!",
    },
    {
        max: 2.6,
        label: "Impacto moderado",
        color: "#9e9d24",
        summary:
            "Você já tem bons hábitos, mas ainda há espaço para reduzir seu impacto ambiental em alguns pontos.",
    },
    {
        max: 3.4,
        label: "Impacto alto",
        color: "#ef6c00",
        summary:
            "Seus hábitos atuais geram um impacto ambiental considerável. Pequenas mudanças no dia a dia podem fazer bastante diferença.",
    },
    {
        max: 4,
        label: "Impacto muito alto",
        color: "#c62828",
        summary:
            "Seu estilo de vida atual exige bastante dos recursos naturais. Vale a pena repensar hábitos de consumo, transporte e energia.",
    },
];

// Calcula o resultado da pegada ecológica a partir das respostas.
// @param {Record<string, number>} answers - mapa questionId -> pontuação (1 a 4)
export function calculateFootprint(answers) {
    const byCategory = CATEGORIES.map((cat) => {
        const score = cat.questions.reduce(
            (sum, q) => sum + (answers[q.id] ?? 0),
            0
        );

        return {
            key: cat.key,
            title: cat.title,
            icon: cat.icon,
            score,
            maxScore: cat.questions.length * 4,
            average: score / cat.questions.length,
        };
    });

    const totalScore = byCategory.reduce((sum, c) => sum + c.score, 0);
    const averageScore = totalScore / TOTAL_QUESTIONS;

    // Converte a média (1 a 4) em "quantidade de planetas" (1.0 a 5.0), uma forma didática de comunicar pegada ecológica.
    const planets = 1 + ((averageScore - 1) / 3) * 4;

    const level = LEVELS.find((l) => averageScore <= l.max) ?? LEVELS[LEVELS.length - 1];

    // Ordena categorias da pior (maior média) para a melhor, para priorizar dicas.
    const rankedCategories = [...byCategory].sort((a, b) => b.average - a.average);

    return {
        totalScore,
        minScore: MIN_SCORE,
        maxScore: MAX_SCORE,
        averageScore,
        planets,
        level,
        byCategory,
        rankedCategories,
    };
}