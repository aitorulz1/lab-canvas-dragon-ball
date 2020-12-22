import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from '../../service/axios';
import tokenAuth from '../../config/token';



const Auth = props => {
    const initialState = {
        token: localStorage.getItem('token'),
    }
}