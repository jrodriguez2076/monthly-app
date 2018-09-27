import React, { Component} from  'react';
import { render } from 'react-dom';


const ColumnStyle = {
    borderRadius: 12,
    backgroundColor: "#5CA36F",
};


const LatestCard = (props)=> {
    return (
        <div className="card hoverable" style={ColumnStyle}>
            <div style={{margin: "10px"}}>
                <h6>{props.name}</h6>
                <p className="truncate">{props.description}</p>
                <p name="amount">{props.amount}</p>
            </div>
        </div> 
    );
};



const Latest = (props)=> {
    return (
        <div>
            <h4>Ultimos Gastos</h4>
            {props.Recent.map(Expenses=><LatestCard {...Expenses}/>)}
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