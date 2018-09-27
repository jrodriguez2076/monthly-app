import React, { Component} from  'react';
import { render } from 'react-dom';


import Add from './AddExpense';
import Latest from './Latest';
import NavBar from './Header';


const ColumnStyle = {
    borderRadius: 12,
    display: "flex"
};

const totalStyle ={
    backgroundColor: "#5CA36F",

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

let RecentExpenses= [
    {amount: "1900", description: "Curso Ingles", name: "Ana" },
    {amount: "3000", description: "Expensas agosto", name: "Jose" },
    {amount: "7500", description: "Alquiler Agosto", name: "Jose"}
]


class App extends Component{
    render() {
        return (
            <div style={{backgroundColor: "#0D2127"}}>
                <div>{<NavBar/>}</div>
                <div className="row" >
                    <div className="col s5"></div>
                    <div className="card-panel col s2 center-align z-depth-3 cyan lighten-4" style={{borderRadius:12}}>
                        <h5 className="card-title">Resumen de Gastos:</h5>
                        <span className="pulse">$$$$$</span>
                    </div>
                    <div className="col s5"></div>
                </div>
                
                <div className= "row container" style={ColumnStyle}>
                    <div className="card-panel col s5 cyan darken-3 yellow-text text-darken-3" style={ColumnStyle}>
                        <Add names={names} entries={entries}/>
                    </div>
                    <div className="card-panel col s5 offset-s2 center-align yellow-text text-darken-3" style={{borderRadius:12, backgroundColor:"#265B40"}}>
                        <Latest Recent={RecentExpenses}/>
                    </div>    
                </div>
                <footer style={{backgroundColor: "#0D2127"}}>Powered by Joc</footer>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));