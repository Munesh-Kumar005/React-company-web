import React from 'react';
import { NavLink } from "react-router-dom";
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Times from './Times';

const Navbar = () => {
    
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-12 mx-auto">

               

            <nav className="navbar navbar-expand-lg navbar-light ">
                            <NavLink className="navbar-brand" to='/'> MuneshKumar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                                        <NavLink className="nav-link active" exact activeClassName="menu_active" to='/'> Home</NavLink>
                        </li>
                        <li className="nav-item">
                                        <NavLink className="nav-link " activeClassName="menu_active" to='/about'> About</NavLink>
                        </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link " activeClassName="menu_active" to='/service'> Service </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link "  activeClassName="menu_active" to='/contact'> Contact</NavLink>
                                    </li>
         
                      
                    </ul>
                    
  </div>
</nav>

           
             
                    </div>


                </div>
            </div>   
            <br  />     
         
           <Times />
            
        </>
       
    );
}

export default Navbar;

          