import React, {useState} from 'react';


export default function Login() {

    const [ usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })
    
    const [ error, guardarError ] = useState(false)

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [ e.target.name ] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if( email.trim() === ''  || password.trim() === '') {
            guardarError(true)
            return;
        }

        guardarError(false);

        guardarUsuario({
            email:'',
            password: ''
        })

        console.log(usuario)
    }


    return (
        
        <form
            onSubmit = { onSubmit }
        >

            {error ? 'Email o Password Incorrectos' : null} 

            <input
                type= 'text'
                placeholder='email'
                name= 'email'
                value= {email}
                onChange={onChange}
            />

            <input
                type= 'password'
                placeholder='password'
                name= 'password'
                value= {password}
                onChange={onChange}
            />

            <input 
                type='submit'
                value='Login'
            />
            
        </form>

        
    )
}
