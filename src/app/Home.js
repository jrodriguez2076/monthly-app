import React, { Component} from  'react';

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
    { value: 'Aniita', label: 'Ana' },
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
            Total: 0,
        }
    };

    //Calcular Total de gastos desde un array
    // async CalculateTotal(expenses){
    //     let Total = 0;
    //     expenses.forEach(item =>{
    //         Total += item.ammount;
    //     })
    //     await this.setState({Total});
    // }

    // //obtener mes actual
    // async setMonth(){
    //     const today = new Date();
        
    //     const day = today.getDate();
    //     const month = today.getMonth() + 1;
    //     const year = today.getFullYear();

    //     await this.setState({Today: `${day}/${month}/${year}`})
    //     await this.setState({monthState: month});
    // }

    // //Obtener mas gastos
    

    async componentDidMount(){
        console.log('Home did mount ');
        // await this.CalculateTotal(this.props.RecentExpenses);
    }
       

    render() {
        return (
            <div style={{backgroundColor: "#00838f", flex: 1}}>
                <NavBar/>
                <div className="row">
                    <div className="col s2 offset-s5 center-align cyan-text text-lighten-3" style={{backgroundColor: "#00838f", margin:"50"}}>
                        <p className="card-title">GASTOS AL {this.props.Today}</p>
                        <h4 className="card-content">
                            $ {this.props.Total}
                        </h4>
                    </div>
                </div>
                
                <div className= "row container white cyan-text text-darken-3" style={ColumnStyle}>
                    <div className="col s1"></div>
                        <Add className="col s10" names={names} entries={entries}/>
                    <div className="col s1"></div>
                </div>
                <footer style={{backgroundColor: "#1de9b6"}}>Powered by Joc</footer>
            </div>
        )
    }
}

export default Home;
