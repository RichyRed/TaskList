import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Tarea from './Tarea';
import React, { useState } from 'react';
const Tareas = () => {
    const [tareas, setTareas] = useState([
        {
            descripcion: 'Aprender React',
            completada: false,
        },
        {
            descripcion: 'Aprender React',
            completada: false,
        },
    ]);

    const eliminarTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas.splice(index, 1);
        setTareas(nuevasTareas);
    };

    const tacharTarea = (index) => {
        const nuevasTareas = [...tareas];
        nuevasTareas[index].completada = true;
        setTareas(nuevasTareas);
    };
    return (
        <div className="tareas">
            <div className="tareas__titulo">
                <h2>Lista de Tareas</h2></div>
            {tareas.map((tarea, index) => (
                <Tarea
                    key={index}
                    tarea={tarea}
                    index={index}
                    eliminarTarea={eliminarTarea}
                    tacharTarea={tacharTarea} 
                />
            ))}
            <div className="tareas__agregar">
                <button className="tareas__agregar__btn">
                    <FontAwesomeIcon icon={faPlus} /></button>

            </div>
        </div>
    )
}
export default Tareas;