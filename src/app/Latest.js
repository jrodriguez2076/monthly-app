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
        <div className="container center-align hoverable" style={{ borderRadius: 12 }}>
            <div className="row">
                <div className="col s12">
                    <div className=" row">
                        <span className="col s3"><img src={require('../public/Ana.jpg')} style={{ width: 100, height: "auto" }}></img></span>
                        <div className="row col s9">
                            <div className="row">
                                <h5 className="col s5">Jose Rodriguez</h5>
                                <span className="col s2"> </span>
                                <p className="col s5 "> dd/mm/yyyy</p>
                            </div>
                            <div className="row">
                                <p className="col s5" style={{}}> $$$$$$$$</p>
                            </div>
                            <div className="row" style={{margin:0}}>
                                <span className="col s12 left-align"> Descripcion de gasto aqui...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // {/* <div style={{ margin: "10px" }}>
        //         <h6>{props.name}</h6>
        //         <p className="truncate">{props.description}</p>
        //         <p name="amount">{props.ammount}</p>
        //     </div> */}
    );
};

const Latest = (props) => {

    return (
        <div style={{ backgroundColor: "#00838f" }}>
            <NavBar />
            <h4 className="row cyan-text text-lighten-3 center-align">Ultimos Gastos</h4>
            <div className="container center-align white cyan-text text-darken-3" style={{ borderRadius: 12 }}>

                <div className="row">
                    <div className="col s12 card-panel center-align">

                        {/* <Select className="col s2"
                        // onChange={(selectedOption) => {this.setState({ newEntry: selectedOption.value })}}
                        options={sortOptions}
                        required>
                        </Select> */}
                        {props.Recent.map(Expenses => <LatestCard className="card offset-s2" key={props._id}  {...Expenses} />)}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Latest