import React from "react";
import './register.css';

function Register(){
 return(
    <div className="Register" style={{padding : 150}}>
        <div className="header1"><h1>REGISTER DETAILS</h1></div>
        <input type="text" className="details" placeholder={'First Name'}></input>
        <br/>
        <br/>
        <input type="text" className="details" placeholder={'Last Name'}></input>
        <br/>
        <br/>
        <input type="tel" className="details" placeholder={'Moblie number'}></input>
        <br/>
        <br/>
        <input type="email" className="details" placeholder={'Email'}></input>
        <br/>
        OTP:
        <input type="time" className="details" name={'OTP'}></input>
        <br/>
        <br/>
        <input type="password" className="details" placeholder={'new password'}></input>
        <br/>
        <br/>
        <input type="password" className="details" placeholder={'conform password'}></input>
        <br/>
        <br/>
        <input type="button" className="submit" value={'signin'}></input>
    </div>
 )
}

export default Register;