import React, { useEffect, useState } from 'react';
import clienteAxios from '../../service/axios';

export default function AllCategories() {

    const [ categories, getCategories ] = useState([])

    useEffect(() => {
        try {
            const respuesta = clienteAxios.get('/categories')
            console.log(respuesta)
        } catch (error) {
            
        }
    })

    return (
        <div>
            
        </div>
    )
}
