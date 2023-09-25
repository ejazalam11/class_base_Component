import React, { Component } from 'react'
import './App.css';
import Nav from "./component/Nav"
import Cont from './component/Cont';
import Login from './component/login';


export default class App extends Component {
  render() {
    return (
      <div className="main">

      
     <Nav  />
     <Cont />
     <Login login="Login here"/>

     
      </div>
    )
  }
}

