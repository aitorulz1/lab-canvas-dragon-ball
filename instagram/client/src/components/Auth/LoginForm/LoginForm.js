import React from 'react';
import { Form, Button} from 'semantic-ui-react';
import './LoginForm.scss';

export default function LoginForm() {
    return (
        <Form classname="login-form">

            <h2>Entra para ver fotos y vídeos de tus amigos</h2>

            <Form.Input type='text' placeholder='Correo Electrónico' name="email" />
            <Form.Input type='password' placeholder='Contraseña' name="password" />

            <Button type="submit" classname="btn-submit">Iniciar Sesión</Button>
        </Form>
    )
}
