import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="grid__note--container">
            <div className="note-container">
                <p className="note-title">Nombre: {note.title}</p>
                <p className="note-apellido">Apellido: {note.apellido}</p>
                <p className="note-dni">Dni: {note.dni}</p>
                <p className="note-telefono">Teléfono: {note.telefono}</p>
                <p className="note-especialidad">Especialidad: {note.especialidad}</p>
                <p className="note-content">Motivo de la visita: {note.content}</p>
                <p className="note-date">{formattedDate}</p>
                <button className="delete-button" onClick={() => onDelete(note.id)}>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default Note
