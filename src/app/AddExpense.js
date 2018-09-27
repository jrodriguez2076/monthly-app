import React, { Component} from  'react';
import { render } from 'react-dom';
import Select from 'react-select';

// const customControlStyles = base => ({
//     height: 50,
// });

const StyleTest ={
    margin: '10px 1px 10px 1px',
    overflow: 'hidden'
};

//Componente de Agregado de nuevo Gasto
class Add extends Component { 
    constructor(props){
        super(props);
        this.state = {
            selectedOption: null,
             selectedName: null,
             selectedEntry: null
        }
    };

    //Cambio de seleccion en elementos SELECT
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(selectedOption);
      }

    render() {
        const { selectedOption } = this.state;  
        return (
            <div>
                <h4 className="brand-logo">Agregar Gasto</h4>
                    <form style={StyleTest}>
                        Hecho Por:
                        <Select className=""  onChange={this.handleChange} options={this.props.names}> 
                        </Select>
                      
                        Lugar:
                        <input type="text" maxLength="25" name="place" />
                        Fecha:
                        <input type="date" name="date" className="grey-text text-lighten-1" />
                        descripción:
                        <input type="text" placeholder="Breve descripcion de gasto" maxLength="100" name="place" />
                        Presupuesto:
                        <Select className="" onChange={this.handleChange} options={this.props.entries}> 
                            </Select>
                        Monnto:
                        <input type="number" maxLength="100" name="place" />
                        Mes:
                        <input type="text" maxLength="100" name="place" />
                        Forma de Pago:
                        <input type="text" maxLength="100" name="place" />
                        <button class="btn waves-effect waves-light" style={StyleTest} type="submit">Agregar</button>
                    </form>
            </div>
        )
}
}

export default Add;