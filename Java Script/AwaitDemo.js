 //await

   
// function displayName(){
//     console.log('My Name isAnand')
//   }
  
//   setTimeout(() => {
//     displayName()
//   }, 5000);
  
//   async function sum(){
  
//   }
  
//   await sum()
console.log("Await:")
async function fn(){
    let pr =new Promise((resolve)=>{
        let x =10
        let y =20
        let sum = x +y
            resolve("sum of two numbers "+sum)
    })
    console.log(await  pr)
}
fn()