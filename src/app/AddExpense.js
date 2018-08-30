import React, { Component} from  'react';
import { render } from 'react-dom';
import Select from 'react-select';

const Style = {
    color: 'light-grey',
};

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
             selectedOption: null
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    }

    render() {
        const { selectedOption } = this.state;
        return (
            <div>
                <h3 className="brand-logo">Agregar Gasto</h3>
                    <form>
                        Hecha Por:
                        <select value={selectedOption} onChange={this.handleChange} options={this.props.names}> 
                        </select>
                        {/* <input type="text" maxLength="20" name="name" /> */}
                        Lugar:
                        <input type="text" maxLength="25" name="place" />
                        Fecha:
                        <input type="date" name="date" className="grey-text text-lighten-1" />
                        description:
                        <input type="text" placeholder="Breve descripcion de gasto" maxLength="100" name="place" />
                        Presupuesto:
                        <input type="text" maxLength="100" name="place" />
                        Monto:
                        <input type="number" maxLength="100" name="place" />
                        Mes:
                        <input type="text" maxLength="100" name="place" />
                        Forma de Pago:
                        <input type="text" maxLength="100" name="place" />
                    </form>
            </div>
        )
}
}

export default Add;