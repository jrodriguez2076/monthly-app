import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';

import Home from './Home'
import Latest from './Latest'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RecentExpenses: [],
            monthState: null,
            Total: 0,
            Today: null
        }
    };

    async CalculateTotal(expenses){
        let Total = 0;
        expenses.forEach(item =>{
            Total += item.ammount;
        })
        await this.setState({Total});
    }

    //obtener mes actual
    async setMonth() {
        const today = new Date();

        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();

        await this.setState({ Today: `${day}/${month}/${year}` })
        await this.setState({ monthState: month });
    }

    //Obtener mas gastos
    async componentDidMount() {
        console.log('Component did mount ');

        await this.setMonth();
        const QueriedExpenses = await Axios.get('/api/month', {
            params: {
                month: this.state.monthState
            }
        });
        await this.setState({ RecentExpenses: QueriedExpenses.data });
        this.CalculateTotal(this.state.RecentExpenses);
    }

    // const RecentExpenses = [
    //     { name: 'Jose', place:'Urquiza', description:'gasto de prueba 1', ammount:'5000', date: '12/01/2019', entry:'Mercado', id: '00001' },
    //     { name: 'Ana', place:'Urquiza', description:'gasto de prueba 2', ammount:'530', date: '11/01/2019', entry:'sube', id: '00002' },
    //     { name: 'Jose', place:'Urquiza', description:'gasto de prueba 3', ammount:'2000', date: '10/01/2019', entry:'Resto J', id: '00003' },
    //     { name: 'Jose', place:'Urquiza', description:'gasto de prueba 4', ammount:'2000', date: '09/01/2019', entry:'Resto A', id: '00004' },
    //     { name: 'Jose', place:'Urquiza', description:'gasto de prueba 5', ammount:'2000', date: '08/01/2019', entry:'Edenor', id: '00005' },
    //     { name: 'Jose', place:'Urquiza', description:'gasto de prueba 6', ammount:'2000', date: '07/01/2019', entry:'Metrogas', id: '00006' },
    //     { name: 'Jose', place:'Urquiza', description:'gasto de prueba 7', ammount:'2000', date: '06/01/2019', entry:'Gym', id: '00007' },
    //     { name: 'Jose', place:'Urquiza', description:'gasto de prueba 8', ammount:'2000', date: '05/01/2019', entry:'Mercado', id: '00008' },
    //     { name: 'Jose', place:'Urquiza', description:'gasto de prueba 9', ammount:'2000', date: '04/01/2019', entry:'Mercado', id: '00009' },


    // ];

    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={(props) => <Home {...props} Today={this.state.Today} Total={this.state.Total} RecentExpenses={this.state.RecentExpenses} />}  />
                        <Route exact path='/history' render={(props) => <Latest {...props} Recent={this.state.RecentExpenses} month={this.state.monthState} />} />
                    </Switch>
                </BrowserRouter>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));