import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Axios from 'axios';

import Home from './Home'
import Latest from './Latest'



class App extends Component {
    constructor(props) {
        super(props);
        this.totalUpdate = this.totalUpdate.bind(this)
        this.state = {
            RecentExpenses: [],
            monthState: null,
            Total: 0,
            Today: null
        }
    };

    totalUpdate(increment) {
        this.setState((prevState)=> ({
            Total: prevState.Total + increment
        }))
      }

    async CalculateTotal(expenses){
        let Total = 0;
        expenses.forEach(item =>{
            Total += item.ammount;
        })
        await this.setState({Total});
    }

    //get current month
    async setMonth() {
        const today = new Date();

        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();

        await this.setState({ Today: `${day}/${month}/${year}` })
        await this.setState({ monthState: month });
    }

    //Fetch Expenses
    async componentDidMount() {
        console.log('Component did mount ');

        await this.setMonth();
        console.log(`this month is ${this.state.monthState}`)
        const QueriedExpenses = await Axios.get('/api/month', {
            params: {
                month: this.state.monthState
            }
        });
        await this.setState({ RecentExpenses: QueriedExpenses.data });
        this.CalculateTotal(this.state.RecentExpenses);
    }

    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={(props) => <Home {...props} Today={this.state.Today} monthState={this.state.monthState} Total={this.state.Total} RecentExpenses={this.state.RecentExpenses} totalUpdate={this.totalUpdate} />}  />
                        <Route exact path='/history' render={(props) => <Latest {...props} Recent={this.state.RecentExpenses} month={this.state.monthState} />} />
                    </Switch>
                </BrowserRouter>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('app'));