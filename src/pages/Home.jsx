import { ArrowRightOutlined, BulbOutlined, TeamOutlined, ThunderboltOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const highlights = [
    {
        key: 0,
        icon: <ThunderboltOutlined />,
        title: "o que oferece?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam amet, optio consequuntur iure voluptatibus vel ullam deleniti. Eligendi saepe ratione quod labore maiores hic? Quas amet est sapiente autem cumque.",
    },
    {
        key: 1,
        icon: <BulbOutlined />,
        title: "o que oferece?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam amet, optio consequuntur iure voluptatibus vel ullam deleniti. Eligendi saepe ratione quod labore maiores hic? Quas amet est sapiente autem cumque.",
    },
    {
        key: 2,
        icon: <TeamOutlined />,
        title: "o que oferece?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam amet, optio consequuntur iure voluptatibus vel ullam deleniti. Eligendi saepe ratione quod labore maiores hic? Quas amet est sapiente autem cumque.",
    },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="page">
            <section className="hero">
                <div className="hero-text">
                    <Title level={1} className="hero-title">
                        Qual é a sua pegada ecológica?
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
                            <Card className="highlight-card" variant="borderless">
                                <div className="highlight-icon">{h.icon}</div>
                                <Title level={4}>{h.title}</Title>
                                <Paragraph type="secondary">{h.text}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </div>
    );
}