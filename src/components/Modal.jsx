import React, { useState } from 'react';

const Modal = ({ onClose, onAddTask }) => {
  const [name, setName] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar y procesar los datos del formulario aquí
    onAddTask({ name, fecha });
    onClose();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Agregar Tarea</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Fecha:</label>
            <input type="date" value={fecha} onChange={handleDateChange} />
          </div>
          <div>
            <button type="submit">Agregar</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
