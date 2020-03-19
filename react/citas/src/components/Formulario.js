import React, {Fragment, useState} from 'react'

const Formulario = () => {


// Crear State de Citas

const [cita, actualizarCita] = useState({
    mascota: "",
    propietario:"",
    fecha:'',
    hora:'',
    sintomas:''
})

const [error, actualizarError] = useState(false)

// Función actualizarState que se ejecuta cada vez que el usuario escribe un input

const actualizarState = (event) => { //handleChange
    console.log(event.target.name) // Recoge el campo en el que escribes. Si pongo value recogerá lo que escribo en el input
    actualizarCita({
        ...cita, // Nos trae los valores de cita y cuando escribo el siguiente campo, me guarda el anterior
        [event.target.name] : event.target.value // Guarda paraca cada campo, el nuevo valor que añado.
    })
}


// Extraer los valores

const { mascota, propietario, fecha, hora, sintomas } = cita;


// Cuando el usuario presiona submit

const submitCita = (event) => {
    event.preventDefault();

    // Validar
    if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
        actualizarError(true);
        return; // Para que no se siga ejecutando la función si falla
    }

    // Asignar un ID

    // Crear la cita

    // Reiniciar el form
}

    return(
    <Fragment>
        <h2>Crear Cita</h2>

        { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

        <form
            onSubmit={submitCita}
        >


            <label>Nombre de la Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
            
            <label>Nombre del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño"
                    onChange={actualizarState}
                    value={propietario}
                />

            <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

            <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

            <label>Síntomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarState}
                value={sintomas}
            >
            </textarea>

            <button
                type="submit"
                className="u-full-width button-primary"
            >Enviar
            </button>


        </form>
    </Fragment>
    )
}

export default Formulario