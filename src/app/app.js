import React, { Component} from  'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home'
import Latest from './Latest'



const App = () => {

    const RecentExpenses = [
        { name: 'Jose', place:'Urquiza', description:'gasto de prueba 1', ammount:'5000', _id: '00001' },
        { name: 'Ana', place:'Urquiza', description:'gasto de prueba 2', ammount:'530', _id: '00002' },
        { name: 'Jose', place:'Urquiza', description:'gasto de prueba 3', ammount:'2000', _id: '00003' },
        { name: 'Jose', place:'Urquiza', description:'gasto de prueba 4', ammount:'2000', _id: '00004' },
        { name: 'Jose', place:'Urquiza', description:'gasto de prueba 5', ammount:'2000', _id: '00005' },
        { name: 'Jose', place:'Urquiza', description:'gasto de prueba 6', ammount:'2000', _id: '00006' },
        { name: 'Jose', place:'Urquiza', description:'gasto de prueba 7', ammount:'2000', _id: '00007' },
        { name: 'Jose', place:'Urquiza', description:'gasto de prueba 8', ammount:'2000', _id: '00008' },
        { name: 'Jose', place:'Urquiza', description:'gasto de prueba 9', ammount:'2000', _id: '00009' },


    ];

    return ( 
            <div>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/history' render={(props) => <Latest {...props} Recent={RecentExpenses} month={12} />}/>
                    </Switch>
                </div>
            </div>
        )
}

ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));