import React, { Fragment, useState } from 'react';

const Pregunta = () => {


    // 1. Definir el state

    const [ cantidad, guardarCantidad ] = useState(0);

    



        return (
            <Fragment>
                <h2>Coloca tu presupuesto</h2>


                <form
                    // onSubmit={}
                >
                    <input 
                        type= "number"
                        className="u-full-width"
                        placeholder="Coloca tu presupuesto"
                        // onChange = {}
                    />

                    <input 
                        type="submit"
                        className="button-primary u-full-width"
                        value="Definir Presupuesto"
                    />
                </form>
            </Fragment>
        )
}

export default Pregunta