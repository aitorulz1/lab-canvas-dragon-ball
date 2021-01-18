import React, { useState } from 'react';
import clienteAxios from '../../service/axios';

const Register = () => {

    const [ data, guardarData ] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const [ error, guardarError ] = useState(false);

    const { name, username, email, password } = data;

    const onChange = e => {
        guardarData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(name.trim() === '' || username.trim() === '' || email.trim() === '' || password.trim() === '' )  {
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarData({
            name: '',
            username: '',
            email: '',
            password: ''
        });


    }

    return(
        <form
            onSubmit={onSubmit}
        >

            {error ? 'Todos los campos son obligatorios' : null}

            <input 
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={onChange}
            />

            <input 
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={onChange}
            />

            <input 
                type="text"
                placeholder="email"
                name="email"
                value={email}
                onChange={onChange}
            />

            <input 
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={onChange}
            />
    
            
            <input
                type="submit"
                value="Registrarse"
                />

        </form>
    )
}

export default Register;
