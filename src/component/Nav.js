import React from 'react';
import "../style/Nav.css";
import imaages from "../images/2.jpg"
export default function Nav() {
  return (
    
        <div className="navbar">
            <div className="icon">
                <h2 className="logo">logo</h2>
            </div>
            <div className="menu">
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">SERVICES</a></li>
                    <li><a href="">DESIGN</a></li>
                    
                </ul>
            </div>
            <div className="search">
                <input className="srch" type="search" name="" placeholder="type to search "/>
                <a href=""><button className="btn">search </button></a>
            </div>
    </div>
    // </div>
  )
}
