import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Estadisticas from "../components/Estadisticas"
import "../styles/inicio.css";

function Inicio() {
    return (
        <div>
            <Header />
            
            <section id="entrada-principal" className="section--entrada--principal">
                <div className="container">
                    <h1 className="section--entrada__h1">Bienvenido a Exloratec</h1>
                    <h5 className="section--entrada__h5">Tour 360° del campus Lima</h5>
                    <div data-aos="fade-up">
                        <Link to="/tour" className="btn btn-begin">Empezar</Link>
                    </div>
                </div>
            </section>

            <section className="section--buttons-authentication">
            <a href="/login" className="btn-neon">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                Iniciar sesión
            </a>

            <a href="/register" className="btn-neon">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                Regístrate
            </a>
            </section>

            <section id="estadisticas" className="section--estadisticas">
                <div className="container">
                    <Estadisticas />
                </div>
            </section>
        
            <Footer />
        </div>
    );
}

export default Inicio;
