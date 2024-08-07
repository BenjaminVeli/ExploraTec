import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../styles/header.css";

function Header({ handleLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const controlPanelRef = useRef(null);

  const handleScroll = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const toggle = toggleRef.current;
    const controlPanel = controlPanelRef.current;
    const body = document.body;

    const handleToggleClick = () => {
      toggle.classList.toggle('active');
      controlPanel.classList.toggle('active');
      body.style.overflow = controlPanel.classList.contains('active') ? 'hidden' : 'visible';
    };

    toggle.addEventListener('click', handleToggleClick);

    const navegacionPanel = document.querySelectorAll('.menupanel');
    navegacionPanel.forEach(panel => {
      panel.addEventListener('click', () => {
        toggle.classList.remove('active');
        controlPanel.classList.remove('active');
        body.style.overflow = 'visible';
      });
    });

    return () => {
      toggle.removeEventListener('click', handleToggleClick);
      navegacionPanel.forEach(panel => {
        panel.removeEventListener('click', () => {
          toggle.classList.remove('active');
          controlPanel.classList.remove('active');
          body.style.overflow = 'visible';
        });
      });
    };
  }, []);

  return (
    <header className="seccion header" id="header">
      <div className="navwrapper" id="navwrapper">
        <nav className="nav">
          <div className="logo__tecsup">
            <a className="logo__tecsup_container" href="https://www.tecsup.edu.pe/" target="_blank" rel="noopener noreferrer">
              <div className="logo">
              <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 772.42 779.14" fill="#fff">
                                <g id="Capa_2" data-name="Capa 2">
                                    <g id="Capa_1-2" data-name="Capa 1">
                                        <path className="cls-1"
                                            d="M772.42,395.77c-4.24,5.9-7.9,11.07-11.64,16.17q-33,45.12-66.13,90.21-37.46,51.06-74.89,102.12c-2.17,3-3.2,3.48-5.68-.11q-42.26-61.39-84.9-122.55Q501,441,472.66,400.41c-.87-1.24-2.8-2.56-1.81-4.15.75-1.2,2.79-.49,4.25-.49,23.82,0,47.64-.09,71.46.05,4,0,4.47-1,4.07-4.93a268.4,268.4,0,0,0-5.84-34.75,254.08,254.08,0,0,0-13.91-42c-5.29-12.26-11.72-23.84-20.22-34.22-2.48-3-5-6-8.25-8.16s-2.59-3.72,0-5.71q21.95-17,43.85-34c20.87-16.15,41.87-32.15,62.57-48.51,3.68-2.91,6-2.91,9.26.11,11.73,11,22.21,22.94,30.54,36.78,22.24,36.93,35.29,77.17,43.67,119.16,3.32,16.66,6.14,33.36,7.09,50.34.23,4.18,1.65,6.06,6.52,6,20.36-.34,40.74-.15,61.11-.16Z" />
                                        <path className="cls-2"
                                            d="M378.26,779.14,165.4,612c12.51-8.19,24.62-16.15,36.77-24.06q38.18-24.85,76.39-49.68,45.92-29.85,91.82-59.72c1.07-.69,2.12-2.23,3.49-1.54,1.63.82.83,2.7.85,4.09.38,22.6.79,45.21.95,67.81,0,3.71,1.22,4.56,4.66,4.28a273.55,273.55,0,0,0,62.53-13c18-5.89,35.36-13.11,50-25.61,2.5-2.14,3,.27,3.92,1.59,7.92,11.8,15.78,23.64,23.68,35.46q27.2,40.67,54.46,81.28c2.06,3,2.24,4.81-.72,7.36-15.45,13.35-32.9,23.35-51.57,31.32-30.83,13.17-63.12,20.88-96.25,25.44a439.81,439.81,0,0,1-46.8,4.39c-2.44.08-3.23.67-3.16,3.39.56,22.15.88,44.3,1.31,66.45C377.75,773.52,378,775.82,378.26,779.14Z" />
                                        <path className="cls-3"
                                            d="M371.23,0c3.58,2.52,6.5,4.55,9.39,6.61Q477.46,75.77,574.3,144.94c2.25,1.62,4.63,2.38.69,5.37Q476.13,225.47,377.47,300.9c-.58.45-1.22.84-1.88,1.3-1.53-1.19-.8-2.8-.84-4.14-.52-22.76-1-45.52-1.38-68.29-.05-3.32-.51-4.56-4.38-4.11-22.37,2.6-42.84,10.63-62.4,21.31a188.6,188.6,0,0,0-39,28.1c-.91-1.25-1.71-2.29-2.44-3.38q-39-58.44-78.09-116.84c-2-2.93-1.89-4.5.82-6.91,32.73-29.17,71-47.87,112.91-59.48a299.2,299.2,0,0,1,67.63-10.87c4.15-.17,4.8-1.58,4.68-5.3-.74-22.75-1.24-45.51-1.81-68.27C371.21,3,371.23,1.93,371.23,0Z" />
                                        <path className="cls-4"
                                            d="M0,395.74c3.41-4.7,6.62-9.16,9.87-13.6L147.58,193.6c3.28-4.48,3.29-4.48,6.64.17q71.29,99.15,142.59,198.3c.75,1.05,1.87,1.93,2,3.46-1.53.93-3.19.45-4.75.46-22.32,0-44.63.11-66.94-.09-4.09,0-5.33.88-5,5.15,2.8,33.21,12.54,63.57,35.91,88.8-2.13,1.59-4.13,3.12-6.17,4.59q-55.73,40.16-111.41,80.39c-2.95,2.14-4.28,2-6.68-.73-24.31-28.11-39.4-60.79-48.26-96.58a365.43,365.43,0,0,1-10-74.13c-.29-7.65-.15-7.65-8-7.65Z" />
                                    </g>
                                </g>
                            </svg>
              </div>
              <div className="logo__text">
              <svg viewBox="0 0 573.84 118.81" fill="#fff">
                                <path
                                    d="M573.84,47.4c-8.55,23-26,31.12-49.33,29.77-6.28-.37-12.6-.19-18.89,0-4,.11-5.43-1.37-5.68-5.47C498.94,55,498.81,55,515.7,55c6,0,12.08.16,18.11-.05,8.49-.28,12.71-5.22,13.32-15.2.64-10.33-3.08-17-11.23-17.73a231.93,231.93,0,0,0-28.28-.54c-5.74.17-7.9-1.45-7.71-7.51C500.41-1.76,498.45.48,513.19.36c8.13-.07,16.34-.67,24.38.19,19.72,2.1,31.27,13.89,36.27,32.66Z" />
                                <path
                                    d="M284.67,118.12c-14.14-.81-31.53,1.67-48.72-1.1-33.08-5.35-52.79-31.41-49.82-65.26C188.66,22.81,214.62.44,245.82.35c9.71,0,19.43.28,29.12-.11,5.7-.23,7.26,2,7.16,7.36-.28,16,1.14,13.61-13.18,13.8-7.07.09-14.18-.14-21.22.45-22,1.84-35.74,17.82-35,40.28.62,19.15,17,34.22,37.89,34.38,26.5.22,53,0,79.51.1,3.2,0,8-1.36,8.55,3.19.7,5.54,1.93,11.56-.92,16.9-1.24,2.32-4.3,1.39-6.6,1.4C316.68,118.15,302.24,118.12,284.67,118.12Z" />
                                <path
                                    d="M352.41.08c9.45,0,18.91.17,28.36-.07,4.81-.12,6.47,1.78,6.39,6.5-.3,18.24,1.63,14.61-14.32,14.83-15,.21-29.94-.09-44.9.12-6,.09-12.46,0-15.43,7-4.05,9.44,1.6,18.54,12,18.91,10.23.36,20.49-.21,30.71.29,25,1.21,40,19,35.91,42.24-3.2,18.28-24.24,32.35-42.14,28.24-2.36-.54-3.78-1.58-3.8-4.13s0-5.26-.14-7.87c-.35-5.36-.36-9.59,7.26-9.87,8.78-.32,13.58-5.88,13.47-13.36s-5.88-13.59-14.22-14c-10.21-.54-20.51.15-30.68-.69-20.34-1.69-31.37-14.55-31-35.12C290.25,15,303.59,1.27,322.48.26c9.95-.53,19.95-.09,29.93-.09Z" />
                                <path
                                    d="M149.19,69.75c-8.66,0-17.34.24-26-.07-6.83-.24-7.43,3.15-5.84,8.44a26.22,26.22,0,0,0,24,18.39c11,.23,22.06.26,33.08,0,5.27-.14,7.55,1.28,7.38,7.06-.51,17.32,1.9,14.44-14.69,14.53-12.56.07-25.17.87-37.58-2.41-37.7-10-55.36-51.73-36.29-85.81,2.41-4.3,5.16-6.74,10.5-6.22s11,.11,16.53.12c1.84,0,3.9-.16,4.9,1.75,1.09,2.09-.73,3.38-1.91,4.68a27.55,27.55,0,0,0-6.13,10.87c-1.5,5-.51,7.88,5.78,7.77,16.54-.3,33.09.19,49.63-.24,6.91-.18,10.55,1.34,9.2,9a23.65,23.65,0,0,0,0,6.29c.44,4.37-1.19,6.1-5.76,6C167.05,69.55,158.12,69.75,149.19,69.75Z" />
                                <path
                                    d="M418.62,37.33c0,9.19-.17,18.39,0,27.58.54,23.56,20.71,35.18,40.94,23.45,5.34-3.1,6.41-1.29,6.32,3.76-.08,4.2.09,8.44.09,12.59,0,8.1-2.54,10.62-9.57,12-34.11,6.9-62.27-15.58-62.5-50.31-.13-19.44.14-38.88-.13-58.32-.07-5.53,1.07-8,7.31-7.92,17.5.09,17.5-.2,17.5,17.42Z" />
                                <path
                                    d="M90.84,20.59c-27.82,0-55.65-.17-83.47.14C1.66,20.8-.2,19.67,0,13.57.5.1.12.08,13.25.08H170.74c10.95,0,10.29.06,11.16,11.08.67,8.4-2.37,9.74-10,9.61C144.92,20.3,117.88,20.59,90.84,20.59Z" />
                                <path className="cls-1"
                                    d="M472,110.21c-2.23-2.82-1.39-5.56-1.39-8.09-.06-31,.14-61.92-.18-92.88C470.39,2.56,471.87,0,479.1.17c16.2.45,16.21.07,16.21,16.22,0,17.32.31,34.65-.08,52C494.82,86.19,487.51,100.46,472,110.21Z" />
                                <path
                                    d="M58.76,71.86c0,13.14-.17,26.28.09,39.41.1,5-1.32,6.9-6.63,7-17.36.26-17.36.46-17.36-17,0-23.65.15-47.29-.12-70.93-.06-5.22,1.49-6.78,6.64-6.64,20.83.55,17-2.66,17.35,16.69C58.91,50.85,58.76,61.36,58.76,71.86Z" />
                            </svg>
              </div>
            </a>
          </div>
          <div className="navigators">
            <div className="navigators__container">
              <a className="enlace menu enlacesnavi active">
                <Link to="/formulario">Formulario</Link>
              </a>
              <a className="enlace menu enlacesnavi">
                <Link to="/crearformulario">Rellenar formulario</Link>
              </a>
              <a className="enlace menu enlacesnavi">
                <Link to="/logout">Cerrar sesión</Link>
              </a>
            </div>
          </div>
          <div className="btn__menu" id="hamburguesa" ref={toggleRef}>
            <span className="carne"></span>
          </div>
        </nav>
      </div>
      <div className="panel_de_control" id="panelControl" ref={controlPanelRef}>
        <div className="panel_content">
          <div className="menu__section">
            <h1 className="menu_titulo">Menú</h1>
            <div className="panel__navegadores menu">
              <a className="menu menupanel enlace enlacesnavi">
                <Link to="/formulario">Formulario</Link>
              </a>
              <a className="menu menupanel enlace enlacesnavi">
                <Link to="/crearformulario">Rellenar formulario</Link>
              </a>
              <a className="menu menupanel enlace enlacesnavi">
                 <Link to="/logout">Cerrar sesión</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
