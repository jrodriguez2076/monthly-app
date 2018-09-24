import React, { Component} from  'react';
import { render } from 'react-dom';


const Style = {
    textTransform: "uppercase"
};

const NavBar = (props)=> {
    return (
         <nav class="cyan darken-1">
            <div class="nav-wrapper" style={Style}>
                <a href="#" className="brand-logo">Gastos Mensuales</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="months.html">Historial</a></li>
                <li><a href="categories.html">Categorias</a></li>
                <li><a href="goals.html">Metas</a></li>
                </ul>
            </div>
        </nav>
      
        // <div className="col s12" style={ColumnStyle}>
        //     <div className="container col s1">GASTOS MENSUALES</div>
        //     <div className="col s1 offset-s6">RESUMEN</div>
        //     <div className="col s1">PRESUPUESTOS</div>
        //     <div className="col s1">METAS</div>
        // </div> 
    );
};

export default NavBar