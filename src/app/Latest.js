import React, { Component } from 'react';
import Select from 'react-select';
import { render } from 'react-dom';
import Axios from 'axios';

import NavBar from './Header';

const sortOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'Recent', label: 'Mas recientes primero' },
    { value: 'Oldest', label: 'Mas Antiguos primero' }
]

const LatestCard = (props) => {
    return (
        <div key={props._id} className="row card hoverable" style={{ borderRadius: 12 }}>
            <div>
                <span className="col s2"><img src={require('../public/Ana.jpg')} style={{width: 100, height: "auto"}}></img></span>
                <span className="col s4"> Nombre y gastos aqui</span>
                <span className="col s2"> Espacio adicional aqui</span>
                <span className="col s2"> fecha y lugar aqui</span>
            </div>
            <br/>
            {/* <div style={{ margin: "10px" }}>
                <h6>{props.name}</h6>
                <p className="truncate">{props.description}</p>
                <p name="amount">{props.ammount}</p>
            </div> */}
        </div>
    );
};

const Latest = (props) => {

    return (
        <div style={{ backgroundColor: "#00838f" }}>
            <NavBar />
            <div className="container col s10 offset-s1 center-align white cyan-text text-darken-3" style={{ borderRadius: 12 }}>
                <div>
                    <h4>Ultimos Gastos</h4>
                    {/* <Select className="col s2"
                        // onChange={(selectedOption) => {this.setState({ newEntry: selectedOption.value })}}
                        options={sortOptions}
                        required>
                        </Select> */}
                    {props.Recent.map(Expenses => <LatestCard key={props._id}  {...Expenses} />)}
                </div>
            </div>
        </div>

    );
};

export default Latest