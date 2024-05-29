//import React from "react";

// function Car(props){
//  return(
//     <div>
//         <h2 style={{marginRight:70 }}>Car Details</h2>
//         <h1>{`Car Name : ${props.carName}`}</h1>
//         <h1>{`Car Model : ${props.carModel}`}</h1>
//         <h1>{`Car Make year : ${props.carYear}`}</h1>
//         <h1>{`car Band : ${props.carBrand}`}</h1>
//         <h1>{`car color : ${props.carColor}`}</h1>
        
//     </div>
//  )

// }

// export default Car;

import React, { useEffect, useState } from "react";

function Car(props){
 
 const [insuranceDate, setInsuranceDate] = useState('20-05-2030')

 
 const [insuranceCompany, setInsuranceCompany] = useState('government qqqq company')

 useEffect(()=>{
    setInsuranceDate('20-05-2035')
 },[])
 useEffect(()=>{
   setInsuranceCompany('20-05-2035')
},[])



 return(
    <div>
        <h1>{`Car Name : ${props.carName}`}</h1>
        <h1>{`Car Model : ${props.carModel}`}</h1>
        <h1>{`Car Make year : ${props.carYear}`}</h1>
        <h1>{`Car Insured date : ${insuranceDate}`}</h1>
        <h1>{`Car Insured company : ${insuranceCompany}`}</h1>
     
    </div>
 )

}

export default Car;