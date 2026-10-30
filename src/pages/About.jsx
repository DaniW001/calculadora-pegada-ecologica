import { Card, Col, Row, Tag, Timeline, Typography } from "antd";
import {
    AimOutlined,
    EnvironmentOutlined,
    UserOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const objectives = [
    "Desenvolver uma aplicação web interativa capaz de calcular a pegada ecológica do usuário com base em seus hábitos de consumo e deslocamento.",
    "Sensibilizar a população, especialmente estudantes, quanto às consequências ambientais de suas ações cotidianas.",
    "Sugerir estratégias práticas e personalizadas para reduzir o impacto ambiental individual.",
    "Estimular o uso de tecnologias digitais como ferramentas de transformação social e cidadania ambiental.",
];

const ods = [
    { n: "04", label: "Educação de qualidade" },
    { n: "12", label: "Consumo e produção responsáveis" },
    { n: "13", label: "Ação contra a mudança global do clima" },
];

const steps = [
    "O usuário responde um questionário sobre hábitos de água, energia, alimentação, transporte e consumo.",
    "As respostas são processadas automaticamente, sem necessidade de cadastro ou identificação pessoal.",
    "O sistema calcula um indicador de pegada ecológica e exibe o resultado de forma clara.",
    "Dicas personalizadas são sugeridas, priorizando as áreas com maior impacto identificado.",
];

export default function About() {
    return (
        <div className="page">
            <Title level={2}>Sobre o Projeto</Title>
            <Paragraph type="secondary" className="about-intro">
                Este site foi desenvolvido como parte das Atividades Extensionistas
                do curso de Bacharelado em Ciência da Computação do Centro
                Universitário Internacional UNINTER.
            </Paragraph>

            <Row gutter={[24, 24]} className="section">
                <Col xs={24} md={12}>
                    <Card
                        title={
                            <span>
                                <EnvironmentOutlined /> Setor de Aplicação
                            </span>
                        }
                        variant="borderless"
                        className="about-card"
                    >
                        <Paragraph>
                            O projeto é aplicado na comunidade do{" "}
                            <strong>Bairro São Francisco</strong>, no município de{" "}
                            <strong>Três de Maio – RS</strong>. A região enfrenta desafios
                            ambientais, como um córrego que atravessa o bairro e sofre com a
                            falta de cuidados por parte dos moradores.
                        </Paragraph>
                        <Paragraph>
                            A proposta busca promover a conscientização ambiental entre os
                            habitantes, especialmente crianças e adolescentes, por meio de
                            ferramentas digitais educativas.
                        </Paragraph>
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card
                        title={
                            <span>
                                <AimOutlined /> Objetivos de Desenvolvimento Sustentável
                            </span>
                        }
                        variant="borderless"
                        className="about-card"
                    >
                        <Paragraph>
                            O projeto está alinhado aos seguintes ODS da Agenda 2030 da ONU:
                        </Paragraph>
                        <div className="ods-tags">
                            {ods.map((o) => (
                                <Tag color="green" key={o.n} className="ods-tag">
                                    ODS {o.n} — {o.label}
                                </Tag>
                            ))}
                        </div>
                    </Card>
                </Col>
            </Row>

            <Card
                title="Objetivos do Projeto"
                variant="borderless"
                className="section about-card"
            >
                <ul className="objectives-list">
                    {objectives.map((o) => (
                        <li key={o}>{o}</li>
                    ))}
                </ul>
            </Card>

            <Card
                title="Como funciona a calculadora"
                variant="borderless"
                className="section about-card"
            >
                <Timeline items={steps.map((s) => ({ content: s }))} />
            </Card>

            <Card
                title={
                    <span>
                        <UserOutlined /> Autor
                    </span>
                }
                variant="borderless"
                className="section about-card"
            >
                <Card size="small" className="team-card" variant="borderless">
                    <strong>Daniel Henrique Weber</strong>
                </Card>
            </Card>
        </div>
    );
}