import React, { Component } from 'react';
import Select from 'react-select';
import { render } from 'react-dom';
import Axios from 'axios';

import NavBar from './Header';

const sortOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'Recent', label: 'Mas recientes primero' },
    { value: 'Oldest', label: 'Mas Antiguos primero' }
]

const LatestCard = (props) => { //Genera cada item de la lista, de acuerdo con los ultimos gastos realizados
    return ( 
            <tr className="hoverable" style={{ borderRadius: 12 }}> 
                <td>Alvin</td>
                <td>5565</td>
                <td>Villa Urquiza</td>
                <td>Mercados</td>
                <td>12/01/91</td>
            </tr>

    );
};

const Latest = (props) => { //Layout general de pagina de gastos recientes

    return (
        <div style={{ backgroundColor: "#00838f" }}>
            <NavBar />
            <h4 className="row cyan-text text-lighten-3 center-align">Ultimos Gastos</h4>
            <div className="container center-align white cyan-text text-darken-3" style={{ borderRadius: 12 }}>
                <div className="row">
                    <div className="container col s12 center-align">
                        <table className="centered">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Monto</th>
                                    <th>Lugar</th>
                                    <th>Presupuesto</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.Recent.map(Expenses => <LatestCard key={props._id}  {...Expenses} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Latest