import React from 'react';
import About from './About';
import Contact from './Contact';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import Service from './Service';
import Home from './Home';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';



const App1 = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={() => <Home name='home' />} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/service" render={Service} />
              <Redirect to="/"/>
            </Switch>
           <Footer  />
        </>

    );
};

export default App1;
