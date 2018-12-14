import React, { Component} from  'react';
import { render } from 'react-dom';
import Select from 'react-select';
import axios from 'axios';

const request = new XMLHttpRequest();

const StyleTest ={
    margin: '10px 1px 10px 1px',
    overflow: 'hidden'
};

//Componente de Agregado de nuevo Gasto
class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
             newName: null,
             newEntry: null,
             cash: true
        }
    };

    //Logica de manejo de submit
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting Form");
        let newExpense = {
            name: this.state.newName,
            place: this.placeInput.value,
            date: this.dateInput.value,
            description: this.descriptionInput.value,
            entry: this.state.newEntry,
            ammount: this.amountInput.value,
            month: this.monthInput.value,
            cash: this.state.cash
        }
        
        axios.post('http://localhost:3000/api/month',newExpense)
            .then(res =>{
                console.log(res);
                console.log(res.data);
            });


    }

    HandleCheck = async (event)=>{
        await this.setState({cash:event.target.checked});
    }

    render() {
        return (
            <div className="center-align">
                <h4>Agregar Gasto</h4>
                    <form style={StyleTest} onSubmit={this.handleSubmit}>
                        Hecho Por:
                        <Select
                        onChange={(selectedName) => {this.setState({ newName: selectedName.value })}} //cambia la seleccion
                        options={this.props.names}>
                        </Select>

                        Lugar:
                        <input type="text"
                        maxLength="25"
                        name="place"
                        required
                        ref={(input)=> this.placeInput = input}/>

                        Fecha:
                        <input type="date"
                        name="date"
                        className="grey-text text-lighten-1"
                        required ref={(input)=> this.dateInput = input}/>

                        descripción:
                        <input type="text"
                        placeholder="Breve descripcion de gasto"
                        maxLength="100"
                        ref={(input)=> this.descriptionInput = input}
                        name="place" />

                        Presupuesto:
                        <Select className=""
                        onChange={(selectedOption) => {this.setState({ newEntry: selectedOption.value })}}
                        options={this.props.entries}
                        required>
                        </Select>

                        Monto:
                        <input type="number"
                        maxLength="100"
                        name="place"
                        required
                        ref={(input)=> this.amountInput = input}
                        />
                        Mes:
                        <input type="number"
                        maxLength="2"
                        required
                        ref={(input)=> this.monthInput = input}/>

                        <label htmlFor="checkbox_id">
                            <input id ="checkbox_id" type="checkbox" onChange={this.HandleCheck}/>
                            <span>Efectivo</span>
                        </label>
                        <br />
                        <button className="btn waves-effect waves-light" style={StyleTest} type="submit" >Agregar</button>
                    </form>
            </div>
        )
}
}

export default Add;