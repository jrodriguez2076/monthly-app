import React, { Component} from  'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home'
import Latest from './Latest'



const App = () => {
    return ( 
            <div>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/history' component={Latest}/>
                    </Switch>
                </div>
            </div>
        )
}

ReactDom.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('app'));