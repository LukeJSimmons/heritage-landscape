import React from "react";
import './Services.css';

import Mowing from '../../images/MowingIcon.png';
import Hauling from '../../images/HaulingIcon.png';

const services = [
{
    title: 'Mowing',
    description: 'mowing, mowing, mowing',
    img: Mowing,
    alt: 'Mowing'
},
{
    title: 'Hauling',
    description: 'Hauling, Hauling, Hauling',
    img: Hauling,
    alt: 'Hauling'
},
{
    title: 'Mowing',
    description: 'mowing, mowing, mowing',
    img: Mowing,
    alt: 'Mowing'
},
{
    title: 'Hauling',
    description: 'Hauling, Hauling, Hauling',
    img: Hauling,
    alt: 'Hauling'
},
];

const Services = () => {
    return (
        <div id="services">
            <h1>Our Services</h1>
            <div className="container">
                {services.map(service => {
                    return (<div className="service">
                        <img src={service.img} alt={service.alt} />
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Services;