import React from 'react';
import web from "../src/images/ab.jpg";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { NavLink } from 'react-router-dom';
import Common from './Common';


const About = () => {
    return (
        <>
            <Common name='Welcome to About Page' imgsrc={web} visit="/contact" btnname="Contact now" />
        </>

    );
}

export default About;
