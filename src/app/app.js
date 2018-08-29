import React, { Component} from  'react';
import { render } from 'react-dom';

import Add from './AddExpense';
import Latest from './Latest';


const ColumnStyle = {
    color: 'light-blue',
    paddingRight: '40px'
};

class App extends Component{
    render() {
        return (
            <div className= "container">
                <div className= "row">
                    <div className="col s5" style={ColumnStyle}>
                        <Add/>
                    </div>
                    <div className="col s5" style={ColumnStyle}>
                        <Latest/>
                    </div>    
                </div>
            </div>
        )
    }
}

render(<App/>, document.getElementById('app'));