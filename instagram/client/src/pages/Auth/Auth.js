import React, { useState} from 'react';
import { Container, Image } from 'semantic-ui-react'
import RegisterForm from '../../components/Auth/RegisterForm/RegisterForm';
import LoginForm from '../../components/Auth/LoginForm/LoginForm';
import instagram from '../../assets/png/instaclone.png'
import './Auth.scss';

function Auth() {

    const [ showLogin, setShowLogin ] = useState(true)

    return(
        <Container fluid className='auth'>
            <Image src={instagram} />

                <div className="container-form">
                    {showLogin ? <LoginForm /> : <p><RegisterForm setShowLogin={setShowLogin }/></p>}
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