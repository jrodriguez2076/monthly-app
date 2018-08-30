import React, { Component} from  'react';
import { render } from 'react-dom';


class Latest extends Component {
    render() {
        return (
            <div className="card-panel hoverable">

                <h6>NOMBRE AQUI</h6>
                <p className="truncate">Descripcion breve del gasto agregado previamente al log del sistema</p>
                <p name="amount">$ monto</p>
            </div>
        )
    }
}

export default Latest