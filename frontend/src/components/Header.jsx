import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/menu.svg';

function MenuItem({ title, link, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li className={`menu__item`} onClick={handleClick}>
      <Link to={link} className="menu__link">
        {title}
      </Link>
      <ul className="menu__nesting" style={{ height: isActive ? 'auto' : 0 }}>
        {children}
      </ul>
    </li>
  );
}


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <header>
        <nav className="menu">
          <section className="menu__container">
            <h1 className="menu__logo">E X P L O R A T E C</h1>
            <ul className={`menu__links ${isMenuOpen ? 'menu__links--show' : ''}`}>
            <MenuItem title="Inicio" link="/" />
            </ul>
            <div className="menu__hamburguer" onClick={toggleMenu}>
                <img src={menuIcon} alt="menu" className="menu__icon" />
            </div>
          </section>
        </nav>
      </header>
    );
  }
  
  export default Header;