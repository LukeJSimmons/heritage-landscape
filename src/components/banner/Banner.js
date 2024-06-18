import React from "react";
import './Banner.css';

import Logo from '../../images/HeritageLogo.png';

const Banner = () => {
    return (
        <div id="banner">
            <img src={Logo} />
        </div>
    );
};

export default Banner;