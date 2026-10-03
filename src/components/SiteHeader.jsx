import { Layout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";

const { Header } = Layout;

const items = [
    { key: "/", label: "Início" },
    { key: "/calculadora", label: "Calculadora" },
    { key: "/sobre", label: "Sobre o Projeto" },
    { key: "/feedback", label: "Feedback" },
];

export default function SiteHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedKey = items.find((i) => i.key === location.pathname)?.key ?? "/";

    return (
        <Header className="site-header">
            <div className="site-header-inner">
                <Link to="/" className="site-brand">
                    <span className="site-brand-icon" aria-hidden="true">
                        🌱
                    </span>
                    <span className="site-brand-text">
                        Calculadora de <strong>Pegada Ecológica</strong>
                    </span>
                </Link>
                <Menu
                    mode="horizontal"
                    selectedKeys={[selectedKey]}
                    items={items}
                    onClick={(e) => navigate(e.key)}
                    className="site-menu"
                />
            </div>
        </Header>
    );
}