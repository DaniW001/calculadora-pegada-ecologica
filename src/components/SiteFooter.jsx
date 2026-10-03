import { Layout } from "antd";

const { Footer } = Layout;

export default function SiteFooter() {
    return (
        <Footer className="site-footer">
            <div className="site-footer-inner">
                <p>
                    <strong>Calculadora de Pegada Ecológica</strong> - Ferramenta educacional para a promoção da sustentabilidade.
                </p>
                <p className="site-footer-meta">
                    Projeto de Atividades Extensionistas - Bacharelado em Ciência da Computação - Centro Universitário Internacional UNINTER.
                </p>
                <p className="site-footer-meta">
                    Desenvolvido por Daniel Henrique Weber. Aplicado na comunidade do Bairro São Francisco, Três de Maio - RS.
                </p>
            </div>
        </Footer>
    );
}