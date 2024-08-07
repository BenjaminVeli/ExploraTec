import { useState, useEffect } from "react";
import api from "../api";
import "../styles/CreateForm.css";

import HeaderAuth from "../components/Header-auth.jsx";

function CreateForm() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [dni, setDni] = useState("");
    const [telefono, setTelefono] = useState("");
    const [apellido, setApellido] = useState("");
    const [especialidades, setEspecialidades] = useState([]);
    const [selectedEspecialidad, setSelectedEspecialidad] = useState("");

    useEffect(() => {
        getNotes();
        getEspecialidades();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const getEspecialidades = () => {
        api
            .get("/api/especialidades/") 
            .then((res) => res.data)
            .then((data) => {
                setEspecialidades(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { 
                content, 
                title, 
                dni, 
                telefono, 
                apellido, 
                especialidad: selectedEspecialidad 
            })
            .then((res) => {
                if (res.status === 201) alert("Registro Exitoso!");
                else alert("No se pudo realizar el registro.");
                getNotes();
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.detail) {
                    window.alert(err.response.data.detail);
                } else {
                    console.error("Error al crear la nota:", err);
                    window.alert("Espere la aprobación del registro anterior.");
                }
            });
    };

    return (
        <div>
            <HeaderAuth />
            <div className="w-full lg:w-6/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                FORMULARIO DE VISITA AL CAMPUS
                            </h6>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form onSubmit={createNote}>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                INFORMACIÓN
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="title">
                                            Nombre
                                        </label>
                                        <input 
                                            type="text" 
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                                            id="title" 
                                            name="title" 
                                            required 
                                            onChange={(e) => setTitle(e.target.value)} 
                                            value={title} 
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="apellido">
                                            Apellido
                                        </label>
                                        <input 
                                            type="text" 
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                                            id="apellido" 
                                            name="apellido" 
                                            required 
                                            onChange={(e) => setApellido(e.target.value)} 
                                            value={apellido} 
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="dni">
                                            Dni
                                        </label>
                                        <input 
                                            type="number" 
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                                            id="dni" 
                                            name="dni" 
                                            required 
                                            onChange={(e) => setDni(e.target.value)} 
                                            value={dni} 
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="telefono">
                                            Teléfono
                                        </label>
                                        <input 
                                            type="number" 
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                                            id="telefono" 
                                            name="telefono" 
                                            required 
                                            onChange={(e) => setTelefono(e.target.value)} 
                                            value={telefono} 
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="especialidad">
                                            Especialidad
                                        </label>
                                        <select 
                                            id="especialidad" 
                                            name="especialidad" 
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            value={selectedEspecialidad}
                                            onChange={(e) => setSelectedEspecialidad(e.target.value)} 
                                            required>
                                            <option value="">Selecciona una especialidad</option>
                                            {especialidades.map((especialidad) => (
                                                <option key={especialidad.id} value={especialidad.id}>
                                                    {especialidad.nombre}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Motivo de la visita 
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <textarea 
                                            id="content" 
                                            name="content" 
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                                            rows="4" 
                                            required 
                                            value={content} 
                                            onChange={(e) => setContent(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-5 text-right">
                                <div className="inline-flex items-end">
                                    <button type="submit" className="button--submit text-white font-bold py-2 px-4 rounded">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateForm;
