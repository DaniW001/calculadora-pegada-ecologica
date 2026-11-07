import { ArrowRightOutlined, BulbOutlined, TeamOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const highlights = [
    {
        key: "rapido",
        tone: "green",
        icon: <ThunderboltOutlined />,
        title: "Calcule em minutos",
        text: "Dez perguntas sobre água, energia, alimentação, transporte e consumo. Sem cadastro e sem dados pessoais.",
    },
    {
        key: "dicas",
        tone: "teal",
        icon: <BulbOutlined />,
        title: "Dicas para você",
        text: "O resultado aponta as duas áreas em que você mais pode reduzir seu impacto, com sugestões práticas para cada uma.",
    },
    {
        key: "bairro",
        tone: "olive",
        icon: <TeamOutlined />,
        title: "Feito para o bairro",
        text: "Pensado para os moradores do Bairro São Francisco, em Três de Maio, para usar em casa, na escola e na comunidade.",
    },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="page">
            <section className="hero">
                <div className="hero-text">
                    <Title level={1} className="hero-title">
                        <span className="hero-title-top">Qual é a sua</span>
                        <span className="hero-title-highlight">pegada ecológica?</span>
                    </Title>
                    <Paragraph className="hero-subtitle">
                        Descubra, de forma simples e gratuita, como seus hábitos de consumo e deslocamento impactam o meio ambiente — e receba dicas práticas para reduzir esse impacto no dia a dia.
                    </Paragraph>
                    <div className="hero-actions">
                        <Button
                            type="primary"
                            size="large"
                            icon={<ArrowRightOutlined />}
                            iconPlacement="end"
                            onClick={() => navigate("/calculadora")}
                        >
                            Calcular minha pegada ecológica
                        </Button>
                        <Button size="large" onClick={() => navigate("/sobre")}>
                            Conhecer o projeto
                        </Button>
                    </div>
                </div>
                <div className="hero-illustration" aria-hidden="true">
                    🌍
                </div>
            </section>

            <section className="section">
                <Row gutter={[24, 24]}>
                    {highlights.map((h) => (
                        <Col xs={24} md={8} key={h.key}>
                            <Card
                                className={`highlight-card highlight-card--${h.tone}`}
                                variant="borderless"
                            >
                                <div className="highlight-header">
                                    <span className="highlight-icon">{h.icon}</span>
                                    <Title level={2} className="highlight-title">
                                        {h.title}
                                    </Title>
                                </div>
                                <Paragraph className="highlight-text">{h.text}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </div>
    );
}