import React, { useState, useEffect} from 'react';
import clienteAxios from '../../service/axios'


const AllCategories = () => {

    const [categories, getCategories] = useState([]);

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
     );
}
 
export default AllCategories;