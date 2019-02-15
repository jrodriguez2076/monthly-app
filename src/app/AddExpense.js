import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

const StyleTest = {
    margin: '10px 1px 10px 1px',
};

const checkboxLayout = {
    margin: 10,
}

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

    clearForm = () => { 
        document.getElementById("add-new-expense").reset();
      }

    //Logica de manejo de submit
    handleSubmit = async (event) => {
        event.preventDefault();
        let expenseDate;
        let expenseMonth;
        console.log("Submitting Form");
        expenseDate = new Date(this.dateInput.value);
        expenseMonth = expenseDate.getMonth() + 1;
        let newExpense = {
            name: this.state.newName,
            place: this.placeInput.value,
            date: this.dateInput.value,
            description: this.descriptionInput.value,
            entry: this.state.newEntry,
            ammount: this.amountInput.value,
            month: expenseMonth,
            cash: this.state.cash
        }

        await axios.post('http://localhost:3000/api/month', newExpense)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });


        if (expenseMonth == this.props.monthState) {
            console.log("This was this month. Updating the total...")
            this.props.totalUpdate(parseInt(this.amountInput.value));
        };

        this.clearForm();
        M.toast({html: 'Gasto agregado!', classes: 'rounded'})
    }

    HandleCheck = async (method) => {
        console.log(method);
        switch(method) {
            case 'efectivo':
                console.log('fue efectivo')
                await this.setState({ cash: true });
                break;
            case 'debito':
                console.log('fue debito')
                await this.setState({ cash: false });
                break;
            case 'pagomiscuentas':
                console.log('pagomiscuentas')
                await this.setState({ cash: false });
                break;
            default:
                console.log('ninguno')
          } 
        

    }

    render() {
        return (
            <div className="center-align">
                <h4>Agregar Gasto</h4>
                <form id="add-new-expense" style={StyleTest} onSubmit={this.handleSubmit}>
                    <div style={{ zIndex: "999" }}>
                        <Select id="name-Input" placeholder="Quien hizo el gasto?"
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

                        <Select id="entry-Input" placeholder="A qué rubro pertenece?" style={{ position: 'fixed',  zIndex: "999"}}
                            onChange={(selectedOption) => { this.setState({ newEntry: selectedOption.value }) }}
                            options={this.props.entries}
                            required>
                        </Select>

                        <input
                            placeholder="cuánto se gastó?"
                            type="number"
                            min="1"
                            maxLength="12"
                            name="place"
                            required
                            ref={(input) => this.amountInput = input}
                        />

                        <label htmlFor="efectivo" style={checkboxLayout}>
                            <input id="efectivo" type="checkbox"  onChange={() =>this.HandleCheck("efectivo")} />
                            <span>Efectivo</span>
                        </label>
                        <label htmlFor="debito" style={checkboxLayout}>
                            <input id="debito" type="checkbox" onChange={() =>this.HandleCheck("debito")} />
                            <span>Débito</span>
                        </label>
                        <label htmlFor="pagoMisCuentas" style={checkboxLayout}>
                            <input id="pagoMisCuentas" type="checkbox"  onChange={() =>this.HandleCheck("pagomiscuentas")} />
                            <span>PagoMisCuentas</span>
                        </label>
                        <br />
                        <button className="btn waves-effect waves-light" style={{ margin: "10px 1px 10px 1px", zIndex: "1" }} type="submit" >Agregar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;