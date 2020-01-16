import React from 'react';
import { Link } from 'react-router-dom';

const PhoneItem = ({id, name, img}) => {
    return(
        <div className="col mb-4">
            <div className="card">
                <img src="{img}" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-img" style={{overflow:'hidden'}}><img src ={img} /></h5>
                        <Link to={`/catalog/${id}`}>See Details</Link>
                    </div>
            </div>
        </div>
    )
}

export default PhoneItem