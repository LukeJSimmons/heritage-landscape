import React from "react";
import './Services.css';

import Mowing from '../../images/HeritageLogo.png';

const services = [
{
    title: 'Mowing',
    description: 'mowing, mowing, mowing',
    img: Mowing,
    alt: 'Mowing'
},
{
    title: 'Mowing',
    description: 'mowing, mowing, mowing',
    img: Mowing,
    alt: 'Mowing'
},
{
    title: 'Mowing',
    description: 'mowing, mowing, mowing',
    img: Mowing,
    alt: 'Mowing'
},
];

const Services = () => {
    return (
        <div id="services">
            {services.map(service => {
                return (<div className="service">
                    <img src={service.img} alt={service.alt} />
                    <h1>{service.title}</h1>
                    <p>{service.description}</p>
                </div>)
            })}
        </div>
    );
};

export default Services;