import React, { Component} from  'react';
import { render } from 'react-dom';


const Style = {
    textTransform: "uppercase"
};

const NavBar = (props)=> {
    return (
         <nav className="cyan darken-1">
            <div className="nav-wrapper" style={Style}>
                <a href="#" className="brand-logo">Gastos Mensuales</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="months.html">Historial</a></li>
                <li><a href="categories.html">Categorias</a></li>
                <li><a href="goals.html">Metas</a></li>
                </ul>
            </div>
        </nav>
      
    );
};

export default NavBar