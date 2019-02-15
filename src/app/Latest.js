import React, { Component } from 'react';
import Axios from 'axios';

import NavBar from './Header';


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
                <button className=" btn-floating btn-medium waves-effect waves-light cyan material-icons" onClick={() =>props.HandleEdit(props._id)} style={{marginRight:10}}>edit</button>
                <button className="btn-floating btn-medium waves-effect waves-light cyan material-icons" onClick={() =>props.HandleDelete(props._id)}>delete</button>
            </td>
        </tr>

    );
};

class Latest extends React.Component{
    constructor(props) {
        super(props);
        this.HandleDelete = this.HandleDelete.bind(this)
        this.HandleEdit = this.HandleEdit.bind(this)
        this.state = {
            RecentExpenses: [] 
        }
    };

   async componentDidMount(){

        const QueriedExpenses = await Axios.get('/api/month', {
            params: {
                month: this.props.month
            }
        });
        await this.setState({ RecentExpenses: QueriedExpenses.data });
   }

    HandleEdit = async (expenseId)=>{
        console.log(expenseId)
        const expenseToEdit = await Axios.get('/api/month/edit', {
            params: {
                _id: expenseId
            }
        });
    
        console.log(expenseToEdit.data);
    }
    
    HandleDelete = async (expenseId)=>{
        if (confirm("Estás seguro de querer eliminar esta entrada?")) {
            let newExpenses = await Axios.delete(`/api/month/2/${expenseId}`)
            console.log(newExpenses.data);
            console.log(this.state.RecentExpenses);
            await this.setState({RecentExpenses: newExpenses.data});
            M.toast({html: 'Eliminada!', classes: 'rounded'})
          } else {
            M.toast({html: 'Solicitud cancelada', classes: 'rounded'})
          }
    }
    

    render(){
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
                                    {this.state.RecentExpenses.map(Expenses => <LatestCard  {...Expenses} key={this.props.id} HandleDelete={this.HandleDelete} HandleEdit={this.HandleEdit}  />,)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Latest