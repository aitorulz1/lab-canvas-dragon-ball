import React, { useEffect, useState } from 'react';
import clienteAxios from '../../service/axios';



export default function AllCategories() {

    const [ categories, getCategories ] = useState([]);

    useEffect( async () => {
        try {
            const respuesta = await clienteAxios.get('/categories');
            getCategories(respuesta);
            console.log(respuesta.data);
        } catch (error) {
         
        }
    })

    return (
        <div>
            {/* {categories.map(category => (
                    <Menu {...category} />                    
            ))} */}
        </div>
    )
}
