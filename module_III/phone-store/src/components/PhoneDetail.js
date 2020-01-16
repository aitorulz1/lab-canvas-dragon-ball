import React from 'react'
import phones from '../phones.json'

const PhoneDetail = (props) => { 
    const phone= phones.find(p => p.id === props.match.params.id)
    // p.id es el del json
    // props.match.params.id es el que se dibuja en la ruta

    return(
        <div className="PhoneDetail" style={{ marginTop: '100px'}}>
            <div class="container">
                <div className="row min-vh-100 justify-container-center">
                    <div className="col-4">
                        <img className="w-100" alt="" src={phone.img} />
                    </div>
                    <div className="col-4">
                        <h1 className="text-left">
                            {phone.name}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneDetail