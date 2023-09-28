import React, { Component } from 'react'
import './App.css';
import Nav from "./component/Nav"
import Cont from './component/Cont';
import Login from './component/login';
import H1 from './component/H1'
import Heading from './component/Heading'


export default class App extends Component {
  render() {
    return (
      <div className="main">

      
     <Nav  />
     <Cont web="Web Design &" />
     <Login login="Login here"/>
     {/* <H1  text ="this is "/> */}
     {/* <Heading /> */}

      </div>
    )
  }
}

