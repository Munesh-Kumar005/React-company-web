import React from 'react';
import web  from "../src/images/ho.jpg";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home = () => {
    return (
        <>
            <Common name='Grow your bussiness with ' imgsrc={web} visit="/service" btnname="Get started" />
        </>
       
    );
}

export default Home;
