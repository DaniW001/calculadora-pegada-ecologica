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
      {
        id: "agua_torneira",
        text: "Você deixa a torneira aberta enquanto escova os dentes ou lava a louça?",
        options: [
          { label: "Nunca", value: 1 },
          { label: "Às vezes", value: 2 },
          { label: "Frequentemente", value: 3 },
          { label: "Sempre", value: 4 },
        ],
      },
      {
        id: "agua_oleo",
        text: "O que é feito com o óleo de cozinha usado na sua casa?",
        options: [
          { label: "Levo a um ponto de coleta ou reaproveito (por exemplo, em sabão)", value: 1 },
          { label: "Guardo em uma garrafa e jogo no lixo comum", value: 2 },
          { label: "Às vezes jogo na pia", value: 3 },
          { label: "Sempre jogo na pia ou no ralo", value: 4 },
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
      {
        id: "energia_lampadas",
        text: "Que tipo de lâmpada há na maior parte da sua casa?",
        options: [
          { label: "LED", value: 1 },
          { label: "Fluorescente (a \"econômica\")", value: 2 },
          { label: "Uma mistura de tipos", value: 3 },
          { label: "Incandescente (a \"amarela\" comum)", value: 4 },
        ],
      },
      {
        id: "energia_standby",
        text: "Com que frequência aparelhos ficam em modo de espera ou carregadores ficam na tomada sem uso?",
        options: [
          { label: "Nunca", value: 1 },
          { label: "Às vezes", value: 2 },
          { label: "Frequentemente", value: 3 },
          { label: "Sempre", value: 4 },
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
      {
        id: "alimentacao_origem",
        text: "De onde vem a maior parte das frutas e verduras que você come?",
        options: [
          { label: "Horta própria ou feira local", value: 1 },
          { label: "Mercado, preferindo produtos da região", value: 2 },
          { label: "Mercado, sem olhar a origem", value: 3 },
          { label: "Como poucas frutas e verduras", value: 4 },
        ],
      },
      {
        id: "alimentacao_ultraprocessados",
        text: "Com que frequência você consome ultraprocessados, como salgadinhos, refrigerantes e embutidos?",
        options: [
          { label: "Raramente", value: 1 },
          { label: "1 ou 2 vezes por semana", value: 2 },
          { label: "Quase todo dia", value: 3 },
          { label: "Várias vezes por dia", value: 4 },
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
      {
        id: "transporte_curto",
        text: "Para trajetos curtos, de até uns 2 km, como você costuma ir?",
        options: [
          { label: "A pé ou de bicicleta", value: 1 },
          { label: "De ônibus ou de carona", value: 2 },
          { label: "De carro ou moto, às vezes", value: 3 },
          { label: "De carro ou moto, sempre", value: 4 },
        ],
      },
      {
        id: "transporte_carona",
        text: "Quando você anda de carro, costuma ir com outras pessoas junto?",
        options: [
          { label: "Não ando de carro", value: 1 },
          { label: "Quase sempre", value: 2 },
          { label: "Às vezes", value: 3 },
          { label: "Quase sempre vou sozinho(a)", value: 4 },
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
      {
        id: "consumo_volumosos",
        text: "O que é feito com lixo grande, como móveis velhos, entulho e eletrônicos?",
        options: [
          { label: "Levo ao ecoponto ou chamo a coleta da prefeitura", value: 1 },
          { label: "Doo ou vendo", value: 2 },
          { label: "Fica guardado, sem destino", value: 3 },
          { label: "Vai para terreno baldio, rua ou beira do córrego", value: 4 },
        ],
      },
      {
        id: "consumo_reutilizaveis",
        text: "Você usa sacolas, garrafas e potes reutilizáveis?",
        options: [
          { label: "Sempre", value: 1 },
          { label: "Na maioria das vezes", value: 2 },
          { label: "Raramente", value: 3 },
          { label: "Nunca", value: 4 },
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