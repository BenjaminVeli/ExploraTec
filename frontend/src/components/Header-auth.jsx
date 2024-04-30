import { Link } from "react-router-dom";
import Form from "../components/Form";
import Registro from "../pages/Register";

import "../styles/header.css";
import arrowIcon from "../assets/arrow.svg";
import menuIcon from "../assets/menu.svg";

function Header({ handleLogout }) {
    return (
        <header>
            <nav className="menu">
                <section className="menu__container">
                    <h1 className="menu__logo">E X P L O R A T E C</h1>

                    <ul className="menu__links">

                        <li className="menu__item menu__item--show">
                            <a href="#" className="menu__link">Formulario<img src={arrowIcon} alt="arrow" className="menu__arrow" /></a>

                            <ul className="menu__nesting">
                                <li className="menu__inside">
                                    <a href="#" className="menu__link menu__link--inside">Rellenar formulario</a>
                                </li>
                            </ul>
                        </li> 

                        <li className="menu__item">
                            <Link to="/logout" onClick={handleLogout} className="menu__link">Cerrar sesión</Link>
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
