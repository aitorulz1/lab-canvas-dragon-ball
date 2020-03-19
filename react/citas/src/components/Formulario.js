    import React, {Fragment, useState} from 'react'
    import uuid from 'uuid/v4'

    const Formulario = ({crearCita}) => {


    // 1. Crear State de Citas

    const [cita, actualizarCita] = useState({
        mascota: "",
        propietario:"",
        fecha:'',
        hora:'',
        sintomas:''
    })

    const [error, actualizarError] = useState(false)



    // 2. Función actualizarState que se ejecuta cada vez que el usuario escribe un input

    const actualizarState = (event) => { //handleChange
        console.log(event.target.name) // Recoge el campo en el que escribes. Si pongo value recogerá lo que escribo en el input
        actualizarCita({
            ...cita, // Nos trae los valores de cita y cuando escribo el siguiente campo, me guarda el anterior
            [event.target.name] : event.target.value // Guarda paraca cada campo, el nuevo valor que añado.
        })
    }



    // 4. Extraer los valores. Los valores los meto en una costante cita. Ahora cita recoge los valores uqe se han puesto en los distintos campos

    const { mascota, propietario, fecha, hora, sintomas } = cita;



    // Cuando el usuario presiona submit

    const submitCita = (event) => {
        event.preventDefault();

        // Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ){
            actualizarError(true);
            return; // Para que no se siga ejecutando la función si falla
        }


    // 5. ELiminar el mensaje previo
        actualizarError(false);


    // 6. Asignar un ID. Lo suele generar una BBDD pero no hay. UUID es un npm q genera id´s sin bbdd. Añado id al objeto Cita
        cita.id = uuid();


    // 7. Crear la cita -> 7.1 en App junto a 3.
        crearCita(cita)


    // 8. Reiniciar el form
        actualizarCita({
            mascota: '',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''      
        })
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