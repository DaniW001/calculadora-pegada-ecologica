import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import About from "./pages/About";
import Feedback from "./pages/Feedback";

const { Content } = Layout;

export default function App() {
  return (
    <Layout className="site-layout">
      <SiteHeader />
      <Content className="site-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculator />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Content>
      <SiteFooter />
    </Layout>
  );
}