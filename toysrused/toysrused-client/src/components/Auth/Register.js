import React, { useState } from 'react';
import clienteAxios from '../../service/axios';

const Register = () => {

    const [ data, guardarData ] = useState({
        nombre:'',
        username:'',
        email:'',
        password:''
    });

    const { nombre, username, email, password } = data;

    const [ error, guardarError ] = useState(false);

    const onSubmit = e => {
        e.preventDefault();

        if(nombre.trim() || username.trim() || email.trim() || password.trim() === '' )  {
            guardarError(true);
            return;
        }

        guardarError(false);
        console.log(data)
    }

    return(
        <form
            onSubmit={onSubmit}
        >

            <input 
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={e => guardarData(e.target.value)}
            />

            <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={e => guardarData(e.target.value)}
            />

            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => guardarData(e.target.value)}
            />

            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => guardarData(e.target.value)}
            />

            {/* <input 
                type="text"
                placeholder="Repeat password"
                value={repeatPassword}
                onChange={e => guardarData(e.target.value)}
            /> */}
            
            <input
                type="submit"
                value="Registrarse"
            />

        </form>
    )
}

export default Register;
