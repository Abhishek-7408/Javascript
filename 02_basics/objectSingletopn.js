// //const tinderuser = new Object() // singleton obj
const tinderuser  = {}

tinderuser.id = "12345bcd"
tinderuser.name = "sammy"
tinderuser.isLoggedin = false

 console.log(tinderuser);

// const regularUser = {

//     email: "sam@gmail.com",
//     fullname:{
// userfullname:{
//     firstname:"abhishek",
//     lastName : "Kushwaha"
// }

//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3=Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [

    {

        id:1,
        email:"h@gmail.com"
    },
    {

        id:1,
        email:"h@gmail.com"
    },
    {

        id:1,
        email:"h@gmail.com"
    },

]

users[1].email

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedin'));



