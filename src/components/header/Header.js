import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header id="header">
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#header">Services</a></li>
                <li><a href="#header">About</a></li>
                <li><a href="#header">Contact</a></li>
            </ul>
        </header>
    );
};

export default Header;