import React from "react";
import './Header.css';

import { Link } from "react-router-dom";

import Logo from '../../images/HeritageLogo.png';

const Header = () => {
    let prevScrollPos = window.scrollY;

    window.onscroll = function() {
        const currentScrollPos = window.scrollY;
        const header = document.querySelector('header');

        if (prevScrollPos > currentScrollPos) {
            header.style.top = '0';
        } else {
            header.style.top = '-138px';
        }

        prevScrollPos = currentScrollPos;
    }

    return (
        <header id="header">
            <ul>
                <div id="container">
                    <li><Link to="/"><img src={Logo} alt="" /></Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">About</Link></li>
                </div>
                <li><Link to="/">Contact Us</Link></li>
            </ul>
        </header>
    );
};

export default Header;