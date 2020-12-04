import React, { Fragment} from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import "./RegisterForm.scss";

export default function RegisterForm(props) {
    const { setShowLogin } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object({
            name: Yup.string().required('Tu nombre es obligatorio'),
            username: Yup.string()
                .matches(/^[a-zA-Z0-9-]*$/, "El nombre del usuario no puede tener espacio")
                .required('El nombre de usuario es obligatorio'),
            email: Yup.string()
                .email('email no es valido')
                .required('El email es obligatorio'),
            password: Yup.string()
                .required('La contsraseña es obligatoria')
                .oneOf([Yup.ref('repeatpassword')], 'La contraseña no coinciden'),
            repeatpassword: Yup.string()
                .required('La contraseña es obligatoria')
                .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
        }),
        onSubmit: (formValue) => {
            console.log('Form Enviado')
            console.log(formValue)
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
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name && true}
                />
                
                <Form.Input
                    type= "text"
                    placeholder= "username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username && true}
                />
                
                <Form.Input
                    type= "text"
                    placeholder= "correo electrónico"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email && true}
                />
                
                <Form.Input
                    type= "password"
                    placeholder= "contraseña"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
                
                <Form.Input
                    type= "password"
                    placeholder= "Repetir Contraseña"
                    name="repeatpassword"
                    value={formik.values.repeatpassword}
                    onChange={formik.handleChange}
                    error={formik.errors.repeatpassword}
                />

                <Button type="submit" className="btn-submit" >Registrarse</Button>
                {/* <Button type="submit" className="btn-submit" onClick={formik.handleReset}>Reiniciar Formulrio</Button> */}
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