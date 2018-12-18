import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

const StyleTest = {
    margin: '10px 1px 10px 1px',
};

//Componente de Agregado de nuevo Gasto
class Add extends Component {
    constructor(props) {
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

        axios.post('http://localhost:3000/api/month', newExpense)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });


    }

    HandleCheck = async (event) => {
        await this.setState({ cash: event.target.checked });
    }

    render() {
        return (
            <div className="center-align">
                <h4>Agregar Gasto</h4>
                <form style={StyleTest} onSubmit={this.handleSubmit}>
                    <div style={{zIndex:"999"}}>
                        <Select placeholder="Quien hizo el gasto?"
                            onChange={(selectedName) => { this.setState({ newName: selectedName.value }) }} //cambia la seleccion
                            options={this.props.names}>
                        </Select>

                        <input placeholder="en dónde se hizo?" type="text"
                            maxLength="25"
                            name="place"
                            required
                            ref={(input) => this.placeInput = input} />

                        <input type="date"
                            placeholder="Cuándo se hizo?"
                            name="date"
                            className="grey-text text-lighten-2"
                            required ref={(input) => this.dateInput = input} />

                        <input type="text"
                            placeholder="Breve descripcion..."
                            maxLength="100"
                            ref={(input) => this.descriptionInput = input}
                            name="place" />

                        <Select placeholder="A qué rubro pertenece?"
                            onChange={(selectedOption) => { this.setState({ newEntry: selectedOption.value }) }}
                            options={this.props.entries}
                            required>
                        </Select>

                        <input
                            placeholder="cuánto se gastó?"
                            type="number"
                            maxLength="100"
                            name="place"
                            required
                            ref={(input) => this.amountInput = input}
                        />

                        <input
                            placeholder="A qué mes pertenece?"
                            type="number"
                            maxLength="2"                                           
                            required
                            ref={(input) => this.monthInput = input} />

                        <label htmlFor="checkbox_id">
                            <input id="checkbox_id" type="checkbox" onChange={this.HandleCheck} />
                            <span>Efectivo</span>
                        </label>
                    </div>
                    <br />
                    <button className="btn waves-effect waves-light" style={{ margin: "10px 1px 10px 1px", zIndex: "1" }} type="submit" >Agregar</button>
                </form>
            </div>
        )
    }
}

export default Add;