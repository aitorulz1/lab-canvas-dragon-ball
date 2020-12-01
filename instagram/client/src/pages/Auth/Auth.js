import React, { useState} from 'react';
import { Container, Image } from 'semantic-ui-react'
import instagram from '../../assets/png/instaclone.png'
import './Auth.scss';

function Auth() {

    const [ showLogin, setShowLogin ] = useState(false)

    return(
        <Container fluid className='auth'>
            <Image src={instagram} />

                <div className="container-form">
                    {showLogin ? <p>Formulario Login</p> : <p>Formulario de Registro</p>}
                </div>

                <div className="change-form">
                    { showLogin 
                    ? 
                    (<>¿No tienes cuenta? <span onClick={() => setShowLogin(!showLogin)}>Regístrate</span></>)
                    :
                    (<>Entra con tu cuenta <span onClick={() => setShowLogin(!showLogin)}> Iniciar Sesión</span></>)
                    }
                </div>
        </Container>
    )
}

export default Auth;