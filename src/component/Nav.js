import React from "react";
import "../style/Nav.css";
import images from "../images/we.jpg";
import Button from "./Button";
import Para from "./Para";
import Input from "./Input";


export default function Nav(props) {
 
    const navList = [
      {
        title: 'Home'
      },
      {
        title: 'About'
      },
      {
        title: 'Services',
      
      },
      {
        title: 'Design',
       
      }
    ];
  return (
    <div className="navbar">
      <div className="icon">
        <div className="logo"></div>
      </div>
      <div className="menu">
      <ul >
      {navList.map((item, index,) => (
        <li key={index}>{item.title} {item.heading}</li> 
       
      ))}
    </ul>
                
           
       

       
      </div>
      <div className="search">
      
        <Input className="srch" type="search" placeholder="Type to Search"/>
        <a href="">
          <Button label="Search" className="btn"/>
        </a>
      </div>
    </div>
  );
}
