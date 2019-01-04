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

const TableIndex = (props) => {
    return (
        <tr>
            <th>Nombre</th>
            <th>Monto</th>
            <th>Lugar</th>
            <th>Presupuesto</th>
            <th>Fecha</th>
        </tr>
    )
}

const LatestCard = (props) => { //Genera cada item de la lista, de acuerdo con los ultimos gastos realizados
    return (
        <tr className="hoverable" key={props.id} style={{ borderRadius: 12 }}>
            <td key={props.id}>{props.name}</td>
            <td key={props.id}>{props.ammount}</td>
            <td key={props.id}>{props.place}</td>
            <td key={props.id}>{props.entry}</td>
            <td key={props.id}>{props.date}</td>
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
                                <TableIndex/>
                            </thead>
                            <tbody>
                                {props.Recent.map(Expenses => <LatestCard  {...Expenses} key={props.id} />,)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Latest