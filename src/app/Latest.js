import React, { Component} from  'react';
import { render } from 'react-dom';


class Latest extends Component {
    render() {
        return (
            <div>
                <h3>Ultimos Gastos</h3>
                <h6>NOMBRE AQUI</h6>
                <p>Descripcion breve del gasto...</p>
                <p name="amount">$ monto</p>
            </div>
        )
    }
}

export default Latest