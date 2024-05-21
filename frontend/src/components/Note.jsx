import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="grid__note--container">
            <div className="note-container">
                <p className="note--text">Nombre: {note.title}</p>
                <p className="note--text">Apellido: {note.apellido}</p>
                <p className="note--text">Dni: {note.dni}</p>
                <p className="note--text">Teléfono: {note.telefono}</p>
                <p className="note--text">Especialidad: {note.especialidad}</p>
                <p className="note--text">Motivo de la visita: {note.content}</p>
                <p className="note--text">{formattedDate}</p>

                {note.is_accepted ? (
                    <p className="note--text--status accepted">Su solicitud ha sido aceptada
                        <span></span>
                        <span></span>
                    </p>
                ) : (
                    <p className="note--text--status pending">Su solicitud está en espera
                        <span></span>
                        <span></span>
                    </p>
                )}

                <button className="delete-button" onClick={() => onDelete(note.id)}>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default Note
