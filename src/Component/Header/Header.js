import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "green"
    }
    return (
        <div>
            <nav className="navbar navbar-light bg-dark">
                <div className="container">
                    <img className="rounded-circle" src={logo} alt="" />
                    <h1 className="text-success fw-bolder">Drive Safer</h1>
                    <div className="d-flex">
                        <div className="justify-content-around text-white fw-bold text-decoration-none">
                            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
                            <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>
                            <NavLink activeStyle={activeStyle} to="/career">Career</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;