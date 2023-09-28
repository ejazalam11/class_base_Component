import React from "react";
import "../style/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSkype } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Button from "./Button";
import Para from "./Para";
import Input from "./Input";





export default function Login(props) {
  return (
    <div className="form">
      <h2>{props.login}</h2>
      
      <Input  type="email" placeholder="Enter Email"/>
      <Input type="password" placeholder="Enter password"/>


      <Button label="Login" className={"btnn"}/>
      <p className="link">
        Don't have an account
        <br />
        <a href="">Sign up</a> here
        <a />
      </p>

      <Para className="liw" text='Login with'  />


      <div className="icons" >
        <a href="#" >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: 'green',marginLeft:'10px' }} />
        </a>
        <a href="#">
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'blue',marginLeft:'10px'}} />

        </a>
        <a href="#">
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#FFC0CB',marginLeft:'10px' }} />

        </a>
        <a href="#">
        <FontAwesomeIcon icon={faSkype} size="2x" style={{ color: 'blue',marginLeft:'10px' }} />

        </a>
        <a href="#">
        <FontAwesomeIcon icon={faGoogle} size="2x" style={{ color: 'red',marginLeft:'10px' }} />

        </a>

        <a href="#">
        <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: 'blue',marginLeft:'10px' }} />

        </a>
      </div>
    </div>
  );
}
