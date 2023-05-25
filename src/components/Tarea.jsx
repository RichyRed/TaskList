import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Tarea.css'; 

const Tarea = ({ tarea, index, eliminarTarea, tacharTarea }) => {
  const handleTacharTarea = () => {
    tacharTarea(index);
  };

  return (
    <div className={`tarea ${tarea.completada ? 'tarea--completada' : ''}`}>
      <div className="tarea__descripcion">
        <p className={tarea.completada ? 'tarea__texto--completada' : ''}>{tarea.descripcion}</p>
      </div>
      <div className="tarea__acciones">
        <button
          className="tarea__acciones__btn tarea__acciones__btn--agregar"
          onClick={handleTacharTarea}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button
          className="tarea__acciones__btn tarea__acciones__btn--eliminar"
          onClick={() => eliminarTarea(index)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Tarea;
