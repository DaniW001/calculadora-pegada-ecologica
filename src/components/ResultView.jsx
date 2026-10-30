import { Button, Card, Col, Progress, Row, Tag, Typography } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { TIPS } from "../utils/footprint";

const { Title, Paragraph } = Typography;

// Cor da barra de cada categoria, conforme o percentual de impacto.
function barColor(percent) {
    if (percent >= 70) return "#c62828";
    if (percent >= 40) return "#ef6c00";
    return "#2e7d32";
}

export default function ResultView({ result, onRestart }) {
    const navigate = useNavigate();
    const { planets, level, byCategory, rankedCategories } = result;

    const worstCategories = rankedCategories.slice(0, 2);

    return (
        <div className="result-view">
            <Card className="result-summary-card" variant="borderless">
                <Tag color={level.color} className="result-level-tag">
                    {level.label}
                </Tag>
                <Title level={2} className="result-planets">
                    Seriam necessários{" "}
                    <span style={{ color: level.color }}>{planets.toFixed(1)}</span>{" "}
                    planetas Terra
                </Title>
                <Paragraph className="result-summary-text">{level.summary}</Paragraph>
                <Paragraph type="secondary" className="result-disclaimer">
                    Este resultado é uma estimativa didática, baseada nas suas
                    respostas sobre água, energia, alimentação, transporte e consumo —
                    não substitui cálculos científicos de pegada ecológica.
                </Paragraph>
            </Card>

            <Title level={3} className="result-section-title">
                Seu impacto por categoria
            </Title>
            <Row gutter={[16, 16]}>
                {byCategory.map((cat) => {
                    // 0% = melhor resposta em tudo, 100% = pior resposta em tudo.
                    const minScore = cat.maxScore / 4;
                    const percent = Math.round(
                        ((cat.score - minScore) / (cat.maxScore - minScore)) * 100
                    );
                    return (
                        <Col xs={24} sm={12} key={cat.key}>
                            <Card
                                size="small"
                                variant="borderless"
                                className="result-category-card"
                            >
                                <div className="result-category-header">
                                    <span className="result-category-icon" aria-hidden="true">
                                        {cat.icon}
                                    </span>
                                    <span>{cat.title}</span>
                                </div>
                                <Progress percent={percent} strokeColor={barColor(percent)} />
                            </Card>
                        </Col>
                    );
                })}
            </Row>

            <Title level={3} className="result-section-title">
                Dicas prioritárias para você
            </Title>
            <Paragraph type="secondary">
                Com base nas suas respostas, estas são as áreas onde pequenas
                mudanças podem gerar o maior impacto positivo:
            </Paragraph>
            <Row gutter={[16, 16]}>
                {worstCategories.map((cat) => (
                    <Col xs={24} md={12} key={cat.key}>
                        <Card
                            title={
                                <span>
                                    <span aria-hidden="true">{cat.icon} </span>
                                    {cat.title}
                                </span>
                            }
                            variant="borderless"
                            className="tips-card"
                        >
                            <ul className="tips-list">
                                {TIPS[cat.key].map((tip) => (
                                    <li key={tip}>{tip}</li>
                                ))}
                            </ul>
                        </Card>
                    </Col>
                ))}
            </Row>

            <div className="result-actions">
                <Button icon={<ReloadOutlined />} onClick={onRestart} size="large">
                    Refazer o questionário
                </Button>
                <Button
                    type="primary"
                    size="large"
                    onClick={() => navigate("/feedback")}
                >
                    Deixar um feedback
                </Button>
            </div>
        </div>
    )
}