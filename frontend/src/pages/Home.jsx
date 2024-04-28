import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [dni, setDni] = useState("");
    const [telefono, setTelefono] = useState("");
    const [apellido, setApellido] = useState("");

    useEffect(() => {
        getNotes();
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

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title, dni, telefono , apellido})
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    const handleLogout = () => {
        localStorage.clear(); // Limpiar localStorage
    };

    return (
        <div>
            <Link to="/logout" onClick={handleLogout}>Logout</Link>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                ))}
            </div>

            <form onSubmit={createNote}>
            <h2 className="h2--tittle">FORMULARIO DE VISITA</h2>
                <label htmlFor="title">Nombre :</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <br />

                <label htmlFor="apellido">Apellido :</label>
                <br />
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido}
                />
                <br />

                <label htmlFor="dni">DNI :</label>
                <br />
                <input
                    type="text"
                    id="dni"
                    name="dni"
                    required
                    onChange={(e) => setDni(e.target.value)}
                    value={dni}
                />
                <br />

                <label htmlFor="telefono">Teléfono :</label>
                <br />
                <input
                    type="number"
                    id="telefono"
                    name="telefono"
                    required
                    onChange={(e) => setTelefono(e.target.value)}
                    value={telefono}
                />
                <br />

                <label htmlFor="content">Motivo de la visita :</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />

                <input type="submit" value="Submit"></input>
            </form>

        </div>
    );
}

export default Home;
