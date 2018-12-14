import React, { Component} from  'react';
import ReactDom from 'react-dom';

import Add from './AddExpense';
import Latest from './Latest';
import NavBar from './Header';
import Axios from 'axios';
import { homedir } from 'os';


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


class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            RecentExpenses: [],
            monthState: null,
            Total: 0
        }
    };

    //Calcular Total de gastos desde un array
    async CalculateTotal(expenses){
        let Total = 0;
        expenses.data.forEach(item =>{
            Total += item.ammount;
        })
        await this.setState({Total});
    }

    //obtener mes actual
    setMonth(){
        const today = new Date();
        const month = today.getMonth() + 1;
        this.setState({monthState: month});
    }

    //Obtener mas gastos
    

    async componentDidMount(){
        console.log('Component did mount ');

        await this.setMonth();
            const QueriedExpenses = await Axios.get('/api/month',{
            params: {
              month: this.state.monthState
            }
          });
        this.setState({RecentExpenses: QueriedExpenses.data});
        await this.CalculateTotal(QueriedExpenses);
    }
       

    render() {
        return (
            <div style={{backgroundColor: "#1de9b6"}}>
                <div>{<NavBar/>}</div>
                <div className="row" >
                    <div className="card-panel col s2 offset-s5 auto center-align z-depth-3 cyan lighten-4" style={{borderRadius:120, margin:"50"}}>
                        <h5 className="card-title">Total</h5>
                        <p className="card-content">
                            <span>ARS: </span>
                            <span>{this.state.Total}</span>
                        </p>
                    </div>
                </div>
                
                <div className= "row container col s10 white cyan-text text-darken-3" style={ColumnStyle}>
                    <div className="col s3"></div>
                    {/* <div className=" card-panel col s12 cyan darken-3 yellow-text text-darken-3" style={ColumnStyle}> */}
                        <Add className="col s6" names={names} entries={entries}/>
                    <div className="col s3"></div>
                    {/* </div> */}
                    {/* <div className="card-panel col s5 offset-s2 center-align yellow-text text-darken-3" style={{borderRadius:12, backgroundColor:"#265B40"}}>
                         <Latest Recent={this.state.RecentExpenses} month={this.state.monthState}/>
                    </div>     */}
                </div>
                <footer style={{backgroundColor: "#0D2127"}}>Powered by Joc</footer>
            </div>
        )
    }
}

export default Home;
