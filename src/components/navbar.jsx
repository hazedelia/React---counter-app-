import React, { Component } from 'react';

//Stateless functional component
//If no need for state 
//
//React will pass Props object a an argument to this function at runtime
//or use Object destructuring ({argument}) and not use props
const NavBar = (props) => {
    console.log('Navbar - rendered')
    return (
        < nav className="navbar navbar-light bg-light" >
            <a className="navbar-brand" href="#">
                Navbar <span className='badge badge-pill badge-secondary'>{props.totalCounters}</span>
            </a>
        </nav >
    );
};



export default NavBar;