import { Layout } from "antd";

const { Footer } = Layout;

export default function SiteFooter() {
    return (
        <Footer className="site-footer">
            <div className="site-footer-inner">
                <div className="site-footer-brand">
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M11 20A7 7 0 0 1 4 13c0-6 6-10 16-10 0 10-4 16-9 17z" />
                        <path d="M4 21c4-6 8-9 12-11" />
                    </svg>
                    <div className="site-footer-text">
                        <strong>Calculadora de Pegada Ecológica</strong>
                        <span>Ferramenta educacional para a promoção da sustentabilidade.</span>
                        <span className="site-footer-meta">
                            Desenvolvido por Daniel Henrique Weber · Bairro São Francisco, Três de Maio – RS
                        </span>
                    </div>
                </div>
                <span className="site-footer-meta">
                    Atividades Extensionistas · Ciência da Computação · UNINTER
                </span>
            </div>
        </Footer>
    );
}