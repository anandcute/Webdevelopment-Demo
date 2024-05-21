
//call back function
function myCalculator(num1, num2, myDisplay){
    let sum = num1 + num2;
    myDisplay(sum)
   }
   
   function myDisplay(sum){
     console.log('Sum value = '+sum)
   }
   
   myCalculator(8,8,myDisplay)

  

   //promise
   let myPromise = new Promise((resolve, reject)=>{
       const x =5 ;
       const y = 10;
   
       if (x === y){
           resolve('x is equal to y')
       }
       else{
           reject('x is not equal to y')
       }
   })
   
   myPromise.then((value)=>{
       console.log('success ' + value)
   }).catch((error)=>{
       console.log('error ' + error)
   })


