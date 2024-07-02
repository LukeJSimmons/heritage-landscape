import React from "react";
import './Banner.css';

import Logo from '../../images/HeritageLogo.png';

const Banner = () => {
    return (
        <div id="banner">
            <img src={Logo} alt="Heritage landscape management logo" />
        </div>
    );
};

export default Banner;