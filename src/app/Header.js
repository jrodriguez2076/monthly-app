import React, { Component} from  'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';
import { Navbar, Nav, NavItem,MenuItem,NavDropdown} from 'react-bootstrap';

const Style = {
    textTransform: "uppercase"
};

const NavBar = (props)=> {
    return (
        <Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#" style={Style}>monthly</a>
                </Navbar.Brand>
            </Navbar.Header>
                <Nav style={{display:"flex", flexDirection:"row"}}>
                        <Link to="/history">Historial</Link>
                        <Link to="/history">Historial2</Link>
                    <NavItem eventKey={2} href="/Budgets">Budgets</NavItem>
                    <NavItem eventKey={3} href="/goals">goals</NavItem>
                </Nav>
        </Navbar>

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