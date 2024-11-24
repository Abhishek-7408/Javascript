// singleton

// object literals

//Object.create  // constructor method


const mysmb = Symbol("key1") 

const Jsuser = {

name: "abhishek",
"full name": "abhishek kushwaha",
age:18,
[mysmb]:"mysbnc1",
location:"Gorakhpur",
isLoggedIn:true

}

console.log(Jsuser.name);

console.log(Jsuser["name"]);

console.log(Jsuser["full name"]);

console.log(Jsuser[mysmb]);
console.log(typeof Jsuser[mysmb]);


Jsuser.name = "yashashvi"
//Object.freeze(Jsuser)
 Jsuser.name = "yash"
console.log(Jsuser.name);

 console.log(Jsuser.name);

console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js");
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting);





