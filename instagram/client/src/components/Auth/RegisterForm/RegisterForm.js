import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import "./RegisterForm.scss";

export default function RegisterForm(props) {
    const { setShowLogin } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: null,
        onSubmit: (formValue) => {

        }
    })




    return (
        <>
            <h2 className="register-form-title">
                Regístrate para ver fotos y videos de tus amigos
            </h2>

            <Form className="register-form" onSubmit={formik.handleSubmit} >
                <Form.Input
                    type= "text"
                    placeholder= "Nombre y Apellidos"
                    name="name"
                    onChange={formik.handleChange}
                />
                
                <Form.Input
                    type= "text"
                    placeholder= "Nombre de usuario"
                    name="usermame"
                    onChange={formik.handleChange}
                />
                
                <Form.Input
                    type= "text"
                    placeholder= "correo electrónico"
                    name="email"
                    onChange={formik.handleChange}
                />
                
                <Form.Input
                    type= "password"
                    placeholder= "contraseña"
                    name="password"
                    onChange={formik.handleChange}
                />
                
                <Form.Input
                    type= "password"
                    placeholder= "Repetir Contraseña"
                    name="repeatpassword"
                    onChange={formik.handleChange}
                />

                <Button type="submit" className="btn-submit" onClick={formik.handleReset}>Registrarse</Button>
            </Form>
        </>
    );
}

function initialValues() {
    return {
        name: '',
        username: '',
        email: '',
        password: '',
        repeatpassword: ''
    }
}