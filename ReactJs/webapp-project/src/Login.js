import React from "react";
import './login.css';

function Login(){
 return(
    <div className="signin" style={{padding : 16}}>
        <div className="header"><h1>Login</h1></div>
        <input type="text" className="details" placeholder={'UserName'}></input>
        <br/>
        <br/>
        <input type="text" className="details" placeholder={'Password'}></input>
        <br/>
        <br/>
        <input type="button" className="submit1" value={'Signin'}></input>
        <input type="button" className="submit" value={'Login'}></input>
        
    </div>
 )
}

export default Login;