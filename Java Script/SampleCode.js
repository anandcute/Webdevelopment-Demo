function stringLearning() {
    var firstName = " Anand "
    var lastName = " kumar "
    console.log(firstName.concat(lastName))
    console.log(firstName.trim())
    console.log(firstName.length)
    console.log(firstName.charAt(3))
    console.log(lastName.at(3))
    console.log(lastName[2])
    console.log(firstName.slice(1, 5))
    console.log(lastName.slice(0, 3))
    console.log(firstName.substring(0, 4))
    console.log(firstName.toUpperCase())
    console.log(firstName.toLowerCase())
    var name = "I like Microsoft and Microsoft "
    console.log(name.replace('Microsoft', 'Zoho'))
    console.log(name.replaceAll('Microsoft', 'Zoho'))
    console.log(firstName.indexOf('d'))
    var myArray = "a,s,d,f,g,f";
    console.log(myArray.split(','));
    //returns an array of strings
    var myArray1 = "a s d f g f";
    console.log(myArray1.split(' '));
    var myArray2 = "a|s|d|f|g|f";
    console.log(myArray2.split('|'));
    console.log(firstName.repeat(4))
}
//stringLearning()

function numberDemo(){
    var num1=9;
    var num2=6;
    var c = num1+num2;
    console.log(c);
    console.log(c.toString());
    console.log(parseInt("12"));
    console.log(parseFloat("12.222"));
    let x = 2.334;
    console.log(x.toFixed());
    console.log(c.toExponential());
    console.log(x.toPrecision());
    console.log(x.valueOf());
    console.log((12).toString());
    let y ="10.10";
    console.log(Number(y));
    
}
numberDemo();

