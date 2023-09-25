import React from 'react';
import "../style/Nav.css";
import images from "../images/login.png"
import  { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
export default function Nav() {
  return (
    
        <div className="navbar">
            <div className="icon">
                <div className="logo"></div>
            </div>
            <div className="menu">
                <ul>
                <li><FontAwesomeIcon  icon="fa-brands fa-facebook" /></li>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">DESIGN</a></li>
                    
                </ul>
            </div>
            <div className="search">
                <input className="srch" type="search" name="" placeholder="Type to search "/>
                <a href=""><button className="btn">search </button></a>
                <FontAwesomeIcon  icon="fa-brands fa-facebook" />
            </div>
    </div>
    // </div>
  )
}
