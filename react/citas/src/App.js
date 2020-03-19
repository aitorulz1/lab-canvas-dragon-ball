  import React, {Fragment, useState, useEffect} from 'react';
  import Formulario from './components/Formulario'
  import ListadoCitas from './components/ListadoCitas'


  function App() {


  // 3. Listado Citas

  const [ citas, guardarCitas ] = useState([])


  // 7.1 Función que toma las citas actuales y agrega la nueva. Es la segunda columna

    const crearCita = cita => {
      guardarCitas([
          ...citas,
          cita
      ]);
  }

  // 8. Viene de ListadoCitas y ya que aquí estan las citas, será donde creamos la función para eliminar cita por su ID

    const eliminarCita = id => {
      const nuevasCitas = citas.filter(cita => cita.id !== id);
      guardarCitas(nuevasCitas)

    }

  //9. Si hay citas titulo de hay cita, sino, título de no hay citas

  const titulo = citas.length === 0 ? 'No hay citas' : 'Estas son las citas'


  // 11. Citas en localStorage q se encuentra en Application en el inspeccionador
  let citasIniciales = JSON.parse(localStorage.getItem('citas')); // El paese es porque localStorage solo permite strings
  if(!citasIniciales) {
    citasIniciales = [];
  }

  // 10. useEffect -> Q no se elimminen al refrescar! Siempre es una array function. Colocamos citas en el storage. El areglo se le conoce como dependencia

  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])




  return (

  <Fragment>
    <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            {/* <h2>Estas son las citas</h2> */}
                <h2>{titulo}</h2>
              {citas.map(cita => (
                  <ListadoCitas 
                    key={cita.id}
                    cita= {cita}
                    eliminarCita = {eliminarCita}
                  />
              ))}
          </div>
        </div>
      </div>
    
  </Fragment>
  );
}

export default App;
