import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header id="header">
            <ul>
                <li><a href="#banner">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    );
};

export default Header;