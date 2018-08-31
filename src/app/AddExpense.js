import React, { Component} from  'react';
import { render } from 'react-dom';
import Select from 'react-select';

const Style = {
    backgroundColor: 'light-grey',
};

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
             selectedName: null,
             selectedEntry: null
        }
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(selectedOption);
      }

    render() {
        const { selectedOption } = this.state;  
        return (
            <div>
                <h3 className="brand-logo">Agregar Gasto</h3>
                    <form>
                        Hecho Por:
                        <Select className=""  onChange={this.handleChange} options={this.props.names}> 
                        </Select>
                        {/* <input type="text" maxLength="20" name="name" /> */}
                        Lugar:
                        <input type="text" maxLength="25" name="place" />
                        Fecha:
                        <input type="date" name="date" className="grey-text text-lighten-1" />
                        description:
                        <input type="text" placeholder="Breve descripcion de gasto" maxLength="100" name="place" />
                        Presupuesto:
                        <Select className="" style={Style} onChange={this.handleChange} options={this.props.entries}> 
                        </Select>
                        {/* <input type="text" maxLength="100" name="place" /> */}
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