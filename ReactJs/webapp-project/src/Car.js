import React from "react";

function Car(props){
 return(
    <div>
        <h2 style={{marginRight:70 }}>Car Details</h2>
        <h1>{`Car Name : ${props.carName}`}</h1>
        <h1>{`Car Model : ${props.carModel}`}</h1>
        <h1>{`Car Make year : ${props.carYear}`}</h1>
        <h1>{`car Band : ${props.carBrand}`}</h1>
        <h1>{`car color : ${props.carColor}`}</h1>
        
    </div>
 )

}

export default Car;