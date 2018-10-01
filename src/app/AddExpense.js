import React, { Component} from  'react';
import { render } from 'react-dom';
import Select from 'react-select';

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
             newEntry: null
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
            cash: this.cashInput.value
        }


        fetch('localhost:3000/api/month', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newExpense.name,
                place: newExpense.place,
                date: newExpense.date,
                description: newExpense.description,
                entry: newExpense.entry,
                ammount: newExpense.ammount,
                month: newExpense.month,
                cash: newExpense.cash,
            })
        })
    }

    //Cambio de seleccion en elementos SELECT ----- Reemplazado por una funcion anonima en el evento onChange
    // handleChange = (selectedOption) => {
    //     this.setState({ newEntry: selectedOption.value });
    //     console.log(selectedOption.value);
    //   }

    render() {
        return (
            <div>
                <h4 className="brand-logo">Agregar Gasto</h4>
                    <form style={StyleTest} onSubmit={this.handleSubmit}>
                        Hecho Por:
                        <Select className=""
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
                        <input type="text"
                        maxLength="100"
                        name="place"
                        required
                        ref={(input)=> this.monthInput = input}/>
                        Forma de Pago:
                        <input type="text" maxLength="100" name="place"
                        ref={(input)=> this.cashInput = input} />
                        <button class="btn waves-effect waves-light" style={StyleTest} type="submit" >Agregar</button>
                    </form>
            </div>
        )
}
}

export default Add;