import React, { Component} from  'react';
import { render } from 'react-dom';
import Axios from 'axios';

const ColumnStyle = {
    borderRadius: 12,
    backgroundColor: "#5CA36F",
};

const LatestCard = (props)=> {
    return (
        <div className="card hoverable" style={ColumnStyle}>
            <div style={{margin: "10px"}}>
                <h6>{props.name}</h6>
                <p className="truncate">{props.description}</p>
                <p name="amount">{props.amount}</p>
            </div>
        </div> 
    );
};

const Latest = (props)=> {
    
    return (
        <div>
            <h4>Ultimos Gastos</h4>
            {props.Recent.map(Expenses=><LatestCard {...Expenses}/>)}
        </div>
    );
};

export default Latest