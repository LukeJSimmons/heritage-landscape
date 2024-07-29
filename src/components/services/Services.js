import React from "react";
import './Services.css';

import { Link } from "react-router-dom";


const services = [
{
    title: 'Mowing',
    description: 'mowing, mowing, mowing',
    img: "../../images/stock1.jpg",
    alt: 'Mowing'
},
{
    title: 'Hauling',
    description: 'Hauling, Hauling, Hauling',
    img: "../../images/stock2.jpg",
    alt: 'Hauling'
},
{
    title: 'Other',
    description: 'Other, Other, Other',
    img: "../../images/stock3.jpg",
    alt: 'Other'
},
];

const Services = () => {
    return (
        <div id="services">
            <h1>Our Services</h1>
            <div className="container">
                {services.map(service => {
                    return (<Link to="/" className="service" id={service.title}>
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                    </Link>)
                })}
            </div>
        </div>
    );
};

export default Services;