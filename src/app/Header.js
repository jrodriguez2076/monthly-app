import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

const Style = {
    textTransform: "uppercase",
    fontSize: "3em",
    borderRadius: 12
};

const NavBar = (props) => {
    return (
        <div className="navbar-fixed">
            <nav style={{ backgroundColor: "#4f008f" }}>
                <div className="nav-wrapper">
                    <a className="brand-logo center hoverable" href="/" style={Style}>monthly</a>
                    <ul className="right hide-on-med-and-down" id="nav-mobile">
                        <li><Link to="/history">Historial</Link></li>
                        <li><Link to="/history">Presupuestos</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar