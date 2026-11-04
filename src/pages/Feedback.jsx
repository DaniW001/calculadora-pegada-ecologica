import { useState } from "react";
import { Alert, Button, Card, Form, Input, Rate, Result, Typography } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { sendFeedback } from "../services/feedback";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Feedback() {
    const [form] = Form.useForm();
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);

    async function handleFinish(values) {
        setSending(true);
        setError(false);
        try {
            await sendFeedback(values);
            setSubmitted(true);
        } catch {
            setError(true);
        } finally {
            setSending(false);
        }
    }

    function handleNewFeedback() {
        form.resetFields();
        setSubmitted(false);
    }

    if (submitted) {
        return (
            <div className="page">
                <Result
                    icon={<SmileOutlined />}
                    status="success"
                    title="Obrigado pelo seu feedback!"
                    subTitle="Sua opinião ajuda a melhorar a Calculadora de Pegada Ecológica."
                    extra={
                        <Button type="primary" onClick={handleNewFeedback}>
                            Enviar outro feedback
                        </Button>
                    }
                />
            </div>
        );
    }

    return (
        <div className="page">
            <Title level={2}>Deixe seu Feedback</Title>
            <Paragraph type="secondary">
                Sua experiência ajuda a melhorar esta ferramenta educacional. O
                feedback é opcional e anônimo — não é necessário se identificar.
            </Paragraph>

            <Card className="feedback-card" variant="borderless">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleFinish}
                    requiredMark={false}
                >
                    <Form.Item
                        name="rating"
                        label="Como você avalia a Calculadora de Pegada Ecológica?"
                        rules={[{ required: true, message: "Selecione uma avaliação." }]}
                    >
                        <Rate allowHalf />
                    </Form.Item>

                    <Form.Item name="name" label="Nome (opcional)">
                        <Input placeholder="Seu nome" maxLength={80} />
                    </Form.Item>

                    <Form.Item
                        name="comment"
                        label="Comentário, sugestão ou elogio"
                        rules={[{ required: true, message: "Escreva um breve comentário." }]}
                    >
                        <TextArea
                            rows={4}
                            maxLength={500}
                            showCount
                            placeholder="O que você achou da ferramenta? O que podemos melhorar?"
                        />
                    </Form.Item>

                    {error && (
                        <Alert
                            type="error"
                            showIcon
                            title="Não foi possível enviar o feedback. Verifique sua conexão e tente novamente."
                            style={{ marginBottom: 16 }}
                        />
                    )}

                    <Button type="primary" htmlType="submit" size="large" loading={sending}>
                        Enviar feedback
                    </Button>
                </Form>
            </Card>
        </div>
    )
}