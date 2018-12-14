import React, { Component} from  'react';
import Select from 'react-select';
import { render } from 'react-dom';
import Axios from 'axios';

const sortOptions =[
    { value: 'name', label: 'Nombre' },
    { value: 'Recent', label: 'Mas recientes primero' },
    { value: 'Oldest', label: 'Mas Antiguos primero' }
]

const ColumnStyle = {
    borderRadius: 12,
    backgroundColor: "#5CA36F",
};

const LatestCard = (props)=> {
    return (
        <div key={props._id} className="card hoverable" style={ColumnStyle}>
            <div style={{margin: "10px"}}>
                <h6>{props.name}</h6>
                <p className="truncate">{props.description}</p>
                <p name="amount">{props.ammount}</p>
            </div>
        </div> 
    );
};

const Latest = (props)=> {
    
    return (
        <div>
            <h4>Ultimos Gastos</h4>
            {/* <Select className="col s2"
                        // onChange={(selectedOption) => {this.setState({ newEntry: selectedOption.value })}}
                        options={sortOptions}
                        required>
                        </Select> */}
            {/* {props.Recent.map(Expenses=><LatestCard key={props._id}  {...Expenses}/>)} */}
        </div>
    );
};

export default Latest