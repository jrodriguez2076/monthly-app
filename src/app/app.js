import React, { Component} from  'react';
import { render } from 'react-dom';


import Add from './AddExpense';
import Latest from './Latest';

const ColumnStyle = {
    borderRadius: 12
};

const imageStyle ={
    maxHeight: "250px",
    maxWidth: "250px",
    overflow: "hidden",
    borderRadius: "50%"
};

const names = [
    { value: 'Ana', label: 'Ana' },
    { value: 'Jose', label: 'Jose' }
];

const entries = [ //Llenar con los presupuestos agregados. Si se agrega uno nuevo, se anade a la lista
    { value: 'Alquiler', label: 'Alquiler' },
    { value: 'Expensas', label: 'Expensas' },
    { value: 'Comidas', label: 'Comidas' },
    { value: 'SUBE', label: 'SUBE' },
    { value: 'Saldo', label: 'Saldo' },
    { value: 'Resto Jose', label: 'Resto Jose' },
    { value: 'Resto Ana', label: 'Resto Ana' },
    { value: 'Flia. Smith', label: 'Flia. Smith' },
    { value: 'Casa', label: 'Casa' },
    { value: 'Curso', label: 'Curso' }
];


class App extends Component{
    render() {
        return (
            <div className= "container">
                <div className="row">
                    <div className="col s5"></div>
                    <div className="card-panel col s2 center-align pulse z-depth-3">
                        <h5 className="card-title">Resumen de Gastos:</h5>
                        <span className="pulse">$$$$$</span>
                    {/* <div className="card-image col s2 center-align" style={ColumnStyle}>
                        <img className="circle responsive-img" style={imageStyle} src="http://icon-park.com/imagefiles/noize_background_darkgreen.png"></img>
                        <span className="card-title ">Resumen de Gastos...</span>
                    </div> */}
                    </div>
                    <div className="col s5"></div>
                </div>
                
                <div className= "row">
                    <div className="card-panel col s5 cyan darken-3 yellow-text text-darken-3" style={ColumnStyle}>
                        <Add names={names} entries={entries}/>
                    </div>
                    <div className="card-panel col s5 offset-s2 center-align"  style={ColumnStyle}>
                        <h3>Ultimos Gastos</h3>
                        <Latest amount="1900" description="Curso Ingles" name="Ana" />
                        <br/>
                        <Latest amount="3000" description="Expensas agosto" name="Jose" />
                        <br/>
                        <Latest amount="7500" description="Alquiler Agosto" name="Jose" />
                    </div>    
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));