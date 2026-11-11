import { useState } from "react";
import { CalculatorOutlined, HomeOutlined, InfoCircleOutlined, MenuOutlined, MessageOutlined, } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";

const { Header } = Layout;

const items = [
    { key: "/", label: "Início", icon: <HomeOutlined /> },
    { key: "/calculadora", label: "Calculadora", icon: <CalculatorOutlined /> },
    { key: "/sobre", label: "Sobre o Projeto", icon: <InfoCircleOutlined /> },
    { key: "/feedback", label: "Feedback", icon: <MessageOutlined /> },
];

export default function SiteHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    const selectedKey = items.find((i) => i.key === location.pathname)?.key ?? "/";

    const [drawerOpen, setDrawerOpen] = useState(false);
    function handleNavigate(e) {
        navigate(e.key);
        setDrawerOpen(false);
    }

    return (
        <Header className="site-header">
            <div className="site-header-inner">
                <Link to="/" className="site-brand">
                    <svg
                        className="site-brand-icon"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                    >
                        <path d="M12 21v-9" />
                        <path d="M12 12c0-4 3-7 8-7 0 4-3 7-8 7z" />
                        <path d="M12 14c0-3-2.5-5.5-7-5.5 0 3 2.5 5.5 7 5.5z" />
                    </svg>
                    <span className="site-brand-text">
                        Calculadora de <strong>Pegada Ecológica</strong>
                    </span>
                </Link>
                <Menu
                    mode="horizontal"
                    selectedKeys={[selectedKey]}
                    items={items}
                    onClick={handleNavigate}
                    className="site-menu"
                />
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    aria-label="Abrir menu"
                    onClick={() => setDrawerOpen(true)}
                    className="site-menu-button"
                />
            </div>
            <Drawer
                title="Menu"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                size={280}
            >
                <Menu
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    items={items}
                    onClick={handleNavigate}
                    className="site-drawer-menu"
                />
            </Drawer>
        </Header>
    );
}