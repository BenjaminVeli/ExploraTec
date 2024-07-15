import React, { useState, useEffect } from 'react';
import api from "../api";
import "../styles/crud.css"

function Homeadmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/api/users/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container--crud">
      {users.length > 0 ? (
        <div>
          <h2 className="table-heading">Lista de Usuarios</h2>
          <table className="table" id="tableResults">
            <thead>
              <tr>
                <th className="table-id">ID</th>
                <th className="table-name">Usuario</th>
                <th className="table-email">Correo</th>
                <th className='table-actions'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="table-id">{user.id}</td>
                  <td className="table-name">{user.username}</td>
                  <td className="table-email">{user.email}</td>
                  <td className='table-actions'>
                    <p className='btns btn-primary' href="">Editar</p>
                    <p className='btns btn-warning' href="">Eliminar</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
}

export default Homeadmin;
