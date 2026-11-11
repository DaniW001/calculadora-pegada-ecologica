# Calculadora de Pegada Ecológica

Aplicação web educacional que estima a pegada ecológica do usuário a partir
de seus hábitos do dia a dia e sugere dicas personalizadas para reduzir o
impacto ambiental.

Projeto das Atividades Extensionistas do curso de Bacharelado em Ciência da
Computação do Centro Universitário Internacional UNINTER, aplicado na
comunidade do Bairro São Francisco, em Três de Maio – RS.

## Funcionalidades

- Questionário com 20 perguntas, 4 em cada uma das 5 categorias: Água,
Energia, Alimentação, Transporte e Consumo e Resíduos.
- Resultado que responde: "se todas as pessoas vivessem como você, de
quantos planetas Terra a humanidade precisaria?", com o nível de impacto
e o desempenho em cada categoria.
- Dicas priorizadas para as duas categorias de maior impacto.
- Formulário de feedback anônimo, com as respostas salvas numa planilha
do Google, via Google Forms.
- Layout responsivo, pensado principalmente para o uso no celular.
- Nenhum cadastro ou dado pessoal obrigatório.

## Tecnologias

- [React](https://react.dev/)
- [Ant Design](https://ant.design/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)

## Como rodar

É preciso ter o [Node.js](https://nodejs.org/) instalado.

```bash
npm install       # instala as dependências
npm run dev       # inicia o servidor de desenvolvimento e abre o navegador
npm run lint      # verifica o código com ESLint
npm run build     # gera a versão de produção em dist/
npm run preview   # serve a versão de produção localmente
```

## Estrutura

```
src/
    assets/       imagens (ilustração da página inicial)
    components/   cabeçalho, rodapé e tela de resultado
    data/         perguntas e alternativas do questionário
    pages/        Início, Calculadora, Sobre e Feedback
    services/     envio do feedback para o Google Forms
    utils/        cálculo da pegada ecológica e dicas
```

## Como funciona o cálculo

Cada pergunta tem quatro alternativas, que valem de 1 (baixo impacto) a 4
(alto impacto). A média das respostas é convertida numa escala de 1 a 5
planetas Terra, e as categorias são ordenadas da pior para a melhor para
priorizar as dicas. A lógica está em `src/utils/footprint.js` e as
perguntas em `src/data/questions.js`.

> O resultado é uma estimativa didática e não substitui metodologias
> científicas de cálculo da pegada ecológica.

## Feedback

O formulário da página Feedback envia as respostas para um Google Forms,
e elas ficam registradas na planilha vinculada a ele. O ID do formulário
e os códigos de cada pergunta estão em `src/services/feedback.js`.

Para usar outro formulário, crie um no Google Forms com três perguntas
(nota, nome e comentário), sem nenhuma obrigatória e sem coleta de
e-mail, e troque esses valores pelos do novo formulário.

## Autor

Daniel Henrique Weber