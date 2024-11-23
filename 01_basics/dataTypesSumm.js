// primitive -> call by value
/*
number
string
bigint
boolean
null
undefinde
symbol

*/

// Non-primitive -> call by reference

/*
arrays 
functions
objects


*/


const id = Symbol('123')
const oterId = Symbol('123')


console.log(id === oterId)

const biginuber = 12345655874564n
console.log(typeof biginuber)



//arrays


const heros = ["shaktimaan", "nagaarjun","doga"]


//object
let myobj = {


    name:"abhisjel",
    age: 22
}

//function


const myFunction= function(){

    console.log("Hello World")
}

console.log(typeof myFunction);
console.log(myFunction);
