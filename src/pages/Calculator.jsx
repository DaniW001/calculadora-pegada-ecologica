import { useState } from "react";
import { Button, Card, Radio, Space, Steps, Typography } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { CATEGORIES } from "../data/questions";
import { calculateFootprint } from "../utils/footprint";
import ResultView from "../components/ResultView";

const { Title, Paragraph } = Typography;

// Converte as alternativas escolhidas (posição de cada uma) em pontuação.
function toScores(selected) {
    const scores = {};
    CATEGORIES.forEach((cat) => {
        cat.questions.forEach((q) => {
            scores[q.id] = q.options[selected[q.id]].value;
        });
    });
    return scores;
}

export default function Calculator() {
    const [stepIndex, setStepIndex] = useState(0);
    const [selected, setSelected] = useState({});
    const [result, setResult] = useState(null);

    const currentCategory = CATEGORIES[stepIndex];
    const isLastStep = stepIndex === CATEGORIES.length - 1;

    const isCurrentStepComplete = currentCategory.questions.every(
        (q) => selected[q.id] !== undefined
    );

    function handleSelect(questionId, optionIndex) {
        setSelected((prev) => ({ ...prev, [questionId]: optionIndex }));
    }

    function goNext() {
        if (isLastStep) {
            setResult(calculateFootprint(toScores(selected)));
        } else {
            setStepIndex((i) => i + 1);
        }
    }

    function goBack() {
        setStepIndex((i) => Math.max(0, i - 1));
    }

    function handleRestart() {
        setSelected({});
        setResult(null);
        setStepIndex(0);
    }

    if (result) {
        return (
            <div className="page">
                <ResultView result={result} onRestart={handleRestart} />
            </div>
        );
    }

    return (
        <div className="page calculator-page">
            <Title level={2}>Calculadora de Pegada Ecológica</Title>
            <Paragraph type="secondary">
                Responda as perguntas abaixo com sinceridade. Não é necessário
                informar nenhum dado pessoal — suas respostas são usadas apenas para
                calcular o resultado nesta sessão.
            </Paragraph>

            <Steps
                current={stepIndex}
                items={CATEGORIES.map((c) => ({ title: c.title }))}
                className="calculator-steps"
                responsive
            />

            <Card className="calculator-card" variant="borderless">
                <div className="calculator-category-header">
                    <span className="calculator-category-icon" aria-hidden="true">
                        {currentCategory.icon}
                    </span>
                    <div>
                        <Title level={3} style={{ margin: 0 }}>
                            {currentCategory.title}
                        </Title>
                        <Paragraph type="secondary" style={{ margin: 0 }}>
                            {currentCategory.description}
                        </Paragraph>
                    </div>
                </div>

                <Space orientation="vertical" size="large" style={{ width: "100%" }}>
                    {currentCategory.questions.map((q, idx) => (
                        <div key={q.id} className="question-block">
                            <Paragraph strong className="question-text">
                                {idx + 1}. {q.text}
                            </Paragraph>
                            <Radio.Group
                                className="question-options"
                                value={selected[q.id]}
                                onChange={(e) => handleSelect(q.id, e.target.value)}
                            >
                                <Space orientation="vertical">
                                    {q.options.map((opt, optIndex) => (
                                        <Radio key={opt.label} value={optIndex}>
                                            {opt.label}
                                        </Radio>
                                    ))}
                                </Space>
                            </Radio.Group>
                        </div>
                    ))}
                </Space>

                <div className="calculator-nav">
                    <Button
                        icon={<ArrowLeftOutlined />}
                        disabled={stepIndex === 0}
                        onClick={goBack}
                    >
                        Voltar
                    </Button>
                    <Button
                        type="primary"
                        icon={<ArrowRightOutlined />}
                        iconPlacement="end"
                        disabled={!isCurrentStepComplete}
                        onClick={goNext}
                    >
                        {isLastStep ? "Ver resultado" : "Próximo"}
                    </Button>
                </div>
            </Card>
        </div>
    )
}