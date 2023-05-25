import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddTask = (task) => {
    // Aquí puedes agregar la lógica para manejar la adición de la tarea en tu aplicación
    console.log('Nueva tarea:', task);
  };

  return (
    <div className="App">
      <h1>Página Sencilla con React</h1>
      <button onClick={handleOpenModal}>Abrir Modal</button>

      {showModal && (
        <Modal onClose={handleCloseModal} onAddTask={handleAddTask} />
      )}
    </div>
  );
};

export default App;
