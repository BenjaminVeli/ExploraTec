import React from 'react';
import bx from '../assets/bx-x.svg';
import "../styles/Modal.css";
import tutorial360 from '../assets/videos/tutorial360.mp4'; 

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button onClick={closeModal} className="close">
            &times;
          </button>
          <p className='modal-header-text'>Recorrido 360 Campus Sede Lima</p>
        </div>
        <div className="modal-body">
          <video controls controlsList="nodownload" preload="metadata" className=''>
            <source src={tutorial360} type="video/mp4" />
          </video>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  );
};

export default Modal;
