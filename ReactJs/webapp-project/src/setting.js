import React from "react";
import './setting.css';
function setting(){
    return(
        <div className="Setting">
            <div className="head"><h1 >{"SETTING"}</h1></div>
            <div className="contain"><h2>General</h2></div>
            <div className="contain"><h2>{"privacy"}</h2></div>
            <div className="contain"> <h2>{"Security"}</h2></div>
            <div className="contain"><h2>{"About"}</h2> </div>
            <button type="logout" className="button" placeholder="Logout">logout</button>
        </div>
                
                
           

    )
}
export default setting;