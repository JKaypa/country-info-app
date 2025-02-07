import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components/components";
import "./layout.css";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
