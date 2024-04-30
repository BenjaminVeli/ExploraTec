import { Link } from "react-router-dom";
import Form from "../components/Form";
import Registro from "../pages/Register";

import "../styles/header.css";
import arrowIcon from "../assets/arrow.svg";
import menuIcon from "../assets/menu.svg";

function Header() {
    return (
        <header>
            <nav className="menu">
                <section className="menu__container">
                    <h1 className="menu__logo">E X P L O R A T E C</h1>

                    <ul className="menu__links">
                        <li className="menu__item">
                            <a href="*" className="menu__link">Inicio</a>
                        </li>

                        <li className="menu__item">
                            <Link to="/login" className="menu__link">Iniciar sesión</Link>
                        </li>

                        <li className="menu__item">
                            <Link to="/register" className="menu__link">Registro</Link>
                        </li>

                    </ul>

                    <div className="menu__hamburguer">
                        <img src={menuIcon} alt="menu" className="menu__icon" />
                    </div>
                </section>
            </nav>

            <script src="header.js"></script>
        </header>
    );
}

export default Header;
