import React from "react";
import './Header.css';

const Header = () => {
    let prevScrollPos = window.scrollY;

    window.onscroll = function() {
        const currentScrollPos = window.scrollY;
        const header = document.querySelector('header');

        if (prevScrollPos > currentScrollPos) {
            header.style.top = '0';
        } else {
            header.style.top = '-80px';
        }

        prevScrollPos = currentScrollPos;
    }

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