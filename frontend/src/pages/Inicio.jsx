import Header from "../components/Header"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


import "../styles/inicio.css";

function Inicio() {
    return <div>
        <Header />
        
        <section id="entrada-principal" className="section--entrada--principal">
            <div className="container">
                    <h1 className="section--entrada__h1">Bienvenido a Exloratec</h1>
                    <h5 className="section--entrada__h5">Tour 360° del campus Lima</h5>
                    <div data-aos="fade-up">
                    <Link to="/login" className="btn btn-begin ">Empezar</Link>
                    </div>
            </div>
        </section>
        <section id="btn--Register--Login">
            
        </section>
    
        <Footer />

    </div>
}

export default Inicio