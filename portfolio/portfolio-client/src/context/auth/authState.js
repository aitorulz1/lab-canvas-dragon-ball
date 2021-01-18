import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../service/axios';
import tokenAuth from '../../config/token';

import {
 REGISTRO_EXITOSO,
//  REGISTRO_ERROR,
//  LOGIN_EXITOSO,
//  LOGIN_ERROR,
//  LOGOUT,
//  OBTENER_USUARIO
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: false,
        usuario: null,
        mensaje: null,
        cargando: false
    }

    // Registrar Usuario
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/register', datos)
            console.log(respuesta)
        } catch (error) {
            
        }
    }

    return(
        <div>
            
        </div>
    )
}

export default AuthState