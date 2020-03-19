import React from 'react'


const ListadoCitas = ({cita, eliminarCita}) => (

    
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.feach}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
        

            <button
                className="button eliminar u-full-width"
                onClick= { () => eliminarCita(cita.id) } // 8. Función que elimina su cita por su id. Lo invocamos en APP ya que es donde están las citas
            >
                Eliminar &times;
            </button>
        </div>
    
    );


export default ListadoCitas