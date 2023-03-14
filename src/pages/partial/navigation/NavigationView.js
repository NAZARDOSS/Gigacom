import React from "react";
import logo from '../../../assets/img/logoGig.png'
import {allRoutes} from '../../../stores/RoutesStore'
import { NavLink } from "react-router-dom";

function Navigation() {
  return (

    
       <header className="header-top">
         <div className="logo">
           <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <span className="vertical-line">|</span>
        <div className="links">
            <ul>
                {allRoutes.map((page) => (
                    <li className="link" key={page.path}>
                        <NavLink className="nav_link" exact='true' activeClassName='active' to={page.path}>
                            {page.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
       </header> 
    
  );
}

export default Navigation;
