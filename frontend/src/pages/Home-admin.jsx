import React, { useState, useEffect } from 'react';
import api from "../api";
import "../styles/crud.css"
import Modal from '../components/Modal-edit'
import '../styles/scena.css';

function Homeadmin() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null); // Estado para almacenar el ID del usuario seleccionado

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (userId) => {
    setSelectedUserId(userId); // Almacena el ID del usuario seleccionado
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null); // Limpia el ID del usuario seleccionado cuando se cierra el modal
  };

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
                    <button onClick={() => openModal(user.id)} className="btns btn-primary">Editar</button>
                    {isModalOpen && selectedUserId === user.id && (
                      <Modal userId={selectedUserId} closeModal={closeModal} />
                    )}
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
