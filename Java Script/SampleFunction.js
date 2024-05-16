function add(x , y){ // with parameter and return type
    var sum = x + y
    return sum
}
console.log('Addition of two num : ' + add(10,12))

function sub(x , y){ //with parameter and without return type
    var sum = x - y
    console.log('Subtraction of two num : ' + sum)
}
sub(100,50)

function mul(){// without parameter and return type
    var x = 10 
    var y = 2
    var sum = x * y
    return sum
}
console.log('MUltiplication of two num : ' +mul())

function mul(){// without parameter and without return type
    var x = 10 
    var y = 2
    var sum = x / y
    console.log('Division of two num : ' + sum)
}
mul()

function mod (){
    let n=13;
    let m=7;
    var sum = n % m ;
    return sum; 
}
console.log("modulo value : " + mod())

//Arrow function

const add1 = () => {
    const x = 10;
    const y = 8;
    return x+y;
}
console.log(`The addition using arrow function is ` + add1() )

var sub1 = (x,y) => {
    
    return x-y;
}
console.log(`The Subtraction using arrow function is ` + sub1(20,10) )

let mul1 = (x,y) => {
   let sum = x * y ;
   console.log(`The Multiplication using arrow function is ` + sum )
}
mul1(10,2) 

var div1 = () => {
    var x = 20 ;
    var y = 2 ;
    const sum = x / y ;
    console.log(`The Division using arrow function is ` + sum )
 }
 div1(20,2) 

 const mod1 = () => {
    let x =30;
    var y = 3;
    const sum = x % y ; 
    return sum ;
 }
 console.log(`The Modulo using arrow function is ` + mod1() )


