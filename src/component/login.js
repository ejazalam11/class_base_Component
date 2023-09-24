import React from 'react'
import "../style/login.css"
export default function Login() {
  return (
    
<div className="form">     
                    <h2>Login here</h2>
                    <input type="email"  name="email"placeholder="Enter email "/>
                    <input type="password" name="password" placeholder="Enter password"/>
                    <button className="btnn"><a href="">Login</a></button>
                    <p className="link">Don't have an account<br/>
                    <a href="">Sign up</a> here<a/></p>
                    <p className="liw">Login with</p>


                    <div className="icons">
                        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                    </div>

                </div>
                   
            
    
  )
}
