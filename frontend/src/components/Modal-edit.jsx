import React, { useState, useEffect } from 'react';
import api from "../api";
import "../styles/Modal.css";

const Modal = ({ userId, closeModal }) => {
  const [userData, setUserData] = useState(null);
  const [formValues, setFormValues] = useState({ email: '', username: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/api/users/${userId}/`);
        setUserData(response.data);
        setFormValues({ email: response.data.email, username: response.data.username });
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      } 
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await api.put(`/api/users/${userId}/`, formValues);
      closeModal();
    } catch (error) {
      console.error('Error al actualizar datos del usuario:', error);
    }
  };



  return (
    <div className="modal-dialog-edit">
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={closeModal} className="close">
            &times;
          </button>
          <p className='modal-header-text'>Editar información del usuario</p>
        </div>
        <div className="modal-body">
          <form>
            <label>
              Correo:
              <input type="email" name="email" value={formValues.email} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
              Usuario:
              <input type="text" name="username" value={formValues.username} onChange={handleChange} />
            </label>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={closeModal} className="btns btn-secondary">Cancelar</button>
          <button onClick={handleSave} className="btns btn-primary">Guardar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
