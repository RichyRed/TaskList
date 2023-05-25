import React, { useState } from 'react';
import Tarea from './components/Tarea';

function App() {
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
    <>
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          index={index}
          eliminarTarea={eliminarTarea}
          tacharTarea={tacharTarea} // Asegúrate de pasar la función tacharTarea correctamente
        />
      ))}
    </>
  );
}

export default App;
