import { Link } from "react-router-dom";
import "./header.css";


const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to={"/"}>
          Country Info App
        </Link>
      </h1>
    </header>
  );
};

export { Header };
