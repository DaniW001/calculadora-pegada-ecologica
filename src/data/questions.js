export const CATEGORIES = [
    {
      key: "agua",
      title: "Água",
      icon: "💧",
      description: "Hábitos de consumo e reaproveitamento de água.",
      questions: [
        {
          id: "agua_banho",
          text: "Quanto tempo você costuma gastar no banho?",
          options: [
            { label: "Menos de 5 minutos", value: 1 },
            { label: "Entre 5 e 10 minutos", value: 2 },
            { label: "Entre 10 e 20 minutos", value: 3 },
            { label: "Mais de 20 minutos", value: 4 },
          ],
        },
        {
          id: "agua_reaproveitamento",
          text: "Você costuma economizar ou reaproveitar água em outras atividades (lavar roupa/louça, regar plantas)?",
          options: [
            { label: "Sempre", value: 1 },
            { label: "Na maioria das vezes", value: 2 },
            { label: "Raramente", value: 3 },
            { label: "Nunca", value: 4 },
          ],
        },
      ],
    },
    {
      key: "energia",
      title: "Energia",
      icon: "💡",
      description: "Uso de eletricidade e aparelhos no dia a dia.",
      questions: [
        {
          id: "energia_uso",
          text: "Como você costuma usar luzes e aparelhos eletrônicos em casa?",
          options: [
            { label: "Desligo tudo que não uso e aproveito luz natural", value: 1 },
            { label: "Tento desligar, mas às vezes esqueço", value: 2 },
            { label: "Deixo ligado com frequência", value: 3 },
            { label: "Praticamente não me preocupo com isso", value: 4 },
          ],
        },
        {
          id: "energia_fonte",
          text: "Qual é a principal fonte de energia da sua casa?",
          options: [
            { label: "Energia solar ou outra fonte renovável", value: 1 },
            { label: "Mista (rede elétrica + alguma fonte renovável)", value: 2 },
            { label: "Somente rede elétrica convencional", value: 3 },
            { label: "Não sei informar", value: 3 },
          ],
        },
      ],
    },
    {
      key: "alimentacao",
      title: "Alimentação",
      icon: "🍽️",
      description: "Hábitos alimentares e desperdício de comida.",
      questions: [
        {
          id: "alimentacao_dieta",
          text: "Qual opção melhor descreve sua alimentação?",
          options: [
            { label: "Vegana ou vegetariana", value: 1 },
            { label: "Como carne poucas vezes por semana", value: 2 },
            { label: "Como carne quase todos os dias", value: 3 },
            { label: "Como carne em praticamente todas as refeições", value: 4 },
          ],
        },
        {
          id: "alimentacao_desperdicio",
          text: "Com que frequência sobra comida que você acaba descartando?",
          options: [
            { label: "Quase nunca", value: 1 },
            { label: "Às vezes", value: 2 },
            { label: "Frequentemente", value: 3 },
            { label: "Quase sempre sobra comida", value: 4 },
          ],
        },
      ],
    },
    {
      key: "transporte",
      title: "Transporte",
      icon: "🚲",
      description: "Meios de deslocamento no dia a dia e em viagens.",
      questions: [
        {
          id: "transporte_diario",
          text: "Qual seu principal meio de transporte no dia a dia?",
          options: [
            { label: "A pé ou de bicicleta", value: 1 },
            { label: "Transporte público ou carona compartilhada", value: 2 },
            { label: "Carro ou moto próprios, algumas vezes por semana", value: 3 },
            { label: "Carro ou moto próprios, sozinho(a), todos os dias", value: 4 },
          ],
        },
        {
          id: "transporte_aviao",
          text: "Com que frequência você viaja de avião?",
          options: [
            { label: "Nunca ou raramente (1 vez por ano ou menos)", value: 1 },
            { label: "1 a 2 vezes por ano", value: 2 },
            { label: "3 a 5 vezes por ano", value: 3 },
            { label: "Mais de 5 vezes por ano", value: 4 },
          ],
        },
      ],
    },
    {
      key: "consumo",
      title: "Consumo e Resíduos",
      icon: "♻️",
      description: "Hábitos de consumo, descarte e reciclagem.",
      questions: [
        {
          id: "consumo_reciclagem",
          text: "Você separa o lixo da sua casa para reciclagem?",
          options: [
            { label: "Sempre", value: 1 },
            { label: "Na maioria das vezes", value: 2 },
            { label: "Raramente", value: 3 },
            { label: "Nunca", value: 4 },
          ],
        },
        {
          id: "consumo_compras",
          text: "Com que frequência você compra roupas, eletrônicos ou outros itens novos (não essenciais)?",
          options: [
            { label: "Raramente, prefiro reutilizar ou consertar", value: 1 },
            { label: "Algumas vezes por ano", value: 2 },
            { label: "Todo mês", value: 3 },
            { label: "Toda semana", value: 4 },
          ],
        },
      ],
    },
];

export const TOTAL_QUESTIONS = CATEGORIES.reduce(
    (sum, cat) => sum + cat.questions.length,
    0
);

export const MIN_SCORE = TOTAL_QUESTIONS * 1;
export const MAX_SCORE = TOTAL_QUESTIONS * 4;