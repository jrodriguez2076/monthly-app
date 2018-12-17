import React, { Component} from  'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';

const Style = {
    textTransform: "uppercase",
    fontSize: "3em"
};

const NavBar = (props)=> {
    return (
        // <Navbar fixedTop>
            /* <Navbar.Header>
                <Navbar.Brand>
                    <a href="#" style={Style}>monthly</a>
                </Navbar.Brand>
            </Navbar.Header> */
            <div className="main-layout">
                <nav style={{display:"flex", flexDirection:"row"}}>
                        <a className="col s2" href="#" style={Style}>monthly</a>
                        <ul className="right" id="nav-mobile">
                            <li><Link to="/history">Historial</Link></li>
                            <li><Link to="/history">Historial2</Link></li>
                        </ul>
                </nav>
            </div>

        //  <nav style={{backgroundColor: "#00AD82"}}>
        //     <div className="nav-wrapper" style={Style}>
        //     <span> <img src={require("../public/logo.png")} style={{width:"3%", height:"auto"}}></img> </span>
        //         <Link to="/history">Historial</Link>
        //         {/* <a href="#" className="brand-logo">Gastos Mensuales</a>
        //         <ul id="nav-mobile" className="right hide-on-med-and-down">
        //         <li></li>
        //         <li><a href="categories.html">Categorias</a></li>
        //         <li><a href="goals.html">Metas</a></li>
        //         </ul> */}
        //     </div>
        // </nav>
      
    );
};

export default NavBar