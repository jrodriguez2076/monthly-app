import React, { Component } from 'react';
import Select from 'react-select';
import Axios from 'axios';

import NavBar from './Header';

const sortOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'Recent', label: 'Mas recientes primero' },
    { value: 'Oldest', label: 'Mas Antiguos primero' }
];

const HandleEdit = async (expenseId)=>{
    console.log(expenseId)
    const expenseToEdit = await Axios.get('/api/month/edit', {
        params: {
            _id: expenseId
        }
    });

    console.log(expenseToEdit.data);
}

const HandleDelete = async (expenseId)=>{
    if (confirm("Estás seguro de querer eliminar esta entrada?")) {
        M.toast({html: 'Eliminada!', classes: 'rounded'})
      } else {
        M.toast({html: 'Solicitud cancelada', classes: 'rounded'})
      }
}

const TableIndex = (props) => {
    return (
        <tr>
            <th>Nombre</th>
            <th>Monto</th>
            <th>Lugar</th>
            <th>Presupuesto</th>
            <th>Fecha</th>
            <th>Acciones</th>
        </tr>
    )
}

const LatestCard = (props) => { //Genera cada item de la lista, de acuerdo con los ultimos gastos realizados
    const today = new Date(props.date);
    const day = today.getDate()+ 1;
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return (
        <tr className="hoverable" key={props.id} style={{ borderRadius: 12 }}>
            <td key={props.id}>{props.name}</td>
            <td key={props.id}>{props.ammount}</td>
            <td key={props.id}>{props.place}</td>
            <td key={props.id}>{props.entry}</td>
            <td key={props.id}>{`${day}/${month}/${year}`}</   td>
            <td>
                <button class=" btn-floating btn-medium waves-effect waves-light cyan material-icons" onClick={() =>HandleEdit(props._id)} style={{marginRight:10}}>edit</button>
                <button class="btn-floating btn-medium waves-effect waves-light cyan material-icons" onClick={() =>HandleDelete(props._id)}>delete</button>
            </td>
        </tr>

    );
};

const Latest = (props) => { //Layout general de pagina de gastos recientes

    return (
        <div id="fullscreen" style={{ backgroundColor: "#00838f"}}>
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