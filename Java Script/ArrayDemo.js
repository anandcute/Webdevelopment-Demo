// let Fname = ["Anand",'kumar','dee','deepak']
// for(let i =0; i < Fname.length; i++){
//     console.log(Fname[i])
// }

// console.log(Fname.length)
// Fname.push('gopi')
// console.log(Fname)
// console.log(Fname.toString())
// console.log(Fname.join(','))
// console.log(Fname.slice(0,2))
// console.log(Fname.at(2))
// console.log(Fname.join(','))
// Fname.pop()
// console.log(Fname)
// Fname.shift()
// console.log(Fname)
// Fname.unshift('Anand')
// console.log(Fname)
// console.log(Fname[1])
// console.log(Fname[3])
// console.log(Fname.indexOf('Anand'))
// delete Fname[0]
// console.log(Fname)
// let sname = ['manoj','lokesh']
// const value = Fname.concat(sname)
// console.log(Fname.copyWithin(3,2))
// var mon = ['jan','feb','mar','apr']
// console.log(mon.toSpliced(0,1))
// console.log(mon.reverse())
// Fname.sort()
// console.log(Fname)


function arraydemo(){
    // Array foreach
    const fruit = ['Banana','Apple','Grapes','Orange']
    fruit.forEach((element,index)=>{
        console.log(index + '_' + element)
    })

    //Array map 
    const nos = [1,2,3,4,5]
    const newArray = nos.map((element)=>{
        return element *2
    })
    console.log(newArray)
    //Array filter
    const no =[1,2,3,5,6,7,10,11,44,320]
    const array = no.filter((element)=>{
        return element > 10
    })
    console.log(array)
    //Array find
    const arr = no.find((element)=>{
        return element < 11
    })
    console.log(arr)
    console.log("___________")
    const arr1 = no.find((element)=>{
        return element === 11
    })
    console.log(arr1)
   
}
//arraydemo()


//object
let empolyee_1 = {
    Fname : 'Anand',
    Lname : 'kumar',
    Id : 100,
    Address : 'Chengalpattu',
    Mobile : 8489079239
}
let empolyee_2={
    Fname : 'Prasanth',
    Lname : 'Kumar',
    Id : 101 ,
    Address: empolyee_1.Address,
    Mobile : empolyee_1.Mobile
}
console.log(empolyee_1)
console.log(empolyee_2)
console.log('----------------')
console.log("1st Employee Details")
console.log('-------------------')
for(let key in empolyee_1){
    let value = empolyee_1[key]
    console.log(key + ':' + value) 
}
console.log('----------------')
console.log("2st Employee Details")
console.log('-----------------')
for(let key in empolyee_2){
    let value = empolyee_2[key]
    console.log(key + ':' + value) 
}





