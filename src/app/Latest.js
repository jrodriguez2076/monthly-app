import React, { Component} from  'react';
import { render } from 'react-dom';


const ColumnStyle = {
    borderRadius: 12
};

const Latest = (props)=> {
    return (
        <div className="card-panel hoverable" style={ColumnStyle}>

        <h6>{props.name}</h6>
        <p className="truncate">{props.description}</p>
        <p name="amount">{props.amount}</p>
        </div> 
    );
};

// class Latest extends Component {
//     render() {
//         return (
//             <div className="card-panel hoverable" style={ColumnStyle}>

//                 <h6>NOMBRE AQUI</h6>
//                 <p className="truncate">Descripcion breve del gasto agregado previamente al log del sistema</p>
//                 <p name="amount">$ monto</p>
//             </div>
//         )
//     }
// }

export default Latest