import React from 'react'
import PhoneItem from './PhoneItem'
import phones from '../phones.json'

const Catalog = () => {
    return(
        <div className="Catalog" style={{marginTop: '70px'}}>
            <div className="container">
                <h1>Catalog</h1>
                <div className="row row-cols-1 row-cols-md-3">
                    {phones.map(phone => (
                        <PhoneItem key={phone.id} {...phone} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog