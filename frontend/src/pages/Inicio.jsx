import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Estadisticas from "../components/Estadisticas"
import "../styles/inicio.css";
import visitImg from "../img/visit.jpg"
import adversting from "../img/adversting.jpg"

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

            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">¿Te gustaría participar en una visita guiada en persona?</h3>
                        <p className="mb-4">Inscríbete a continuación para ser parte de nuestras visitas presenciales y conocer más sobre nuestro campus.</p>
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
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg"src={visitImg} />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src={adversting} />
                    </div>
                </div>
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
