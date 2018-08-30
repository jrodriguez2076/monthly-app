import React, { Component} from  'react';
import { render } from 'react-dom';

import Add from './AddExpense';
import Latest from './Latest';

const ColumnStyle = {
    borderColor: 'grey',
    borderWidth: 10
    //backgroundColor: '#2a7c8e',
};

class App extends Component{
    render() {
        return (
            <div className= "container">
                <div className="row">
                    <div className="col s4"></div>
                    <div className="circle  col s4 center-align">
                        <h4 className="valign-wrapper">Resumen de Gastos...</h4>
                    </div>
                    <div className="col s4"></div>
                </div>
                
                <div className= "row">
                    <div className="card-panel col s5 cyan darken-3 yellow-text text-darken-3" style={ColumnStyle}>
                        <Add/>
                    </div>
                    <div className="card-panel col s5 offset-s2" >
                        <h3>Ultimos Gastos</h3>
                        <Latest/>
                        <br/>
                        <Latest/>
                        <br/>
                        <Latest/>
                    </div>    
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));