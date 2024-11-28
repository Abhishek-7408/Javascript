// fetch('https://something.com').then().catch().finally()


const promiseOne = new Promise(function(resolve,reject){

//do an async task
//db calls
// network call
setTimeout(function(){
    console.log('Async task is complete');
    resolve()
    
},1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


const PromiseThree = new Promise(function(resolve,reject){

    setTimeout(function(){

resolve({username: "Chai", email: "chai@gmail.com"})

    },1000)
})

PromiseThree.then(function(user){
console.log(user);

})


const PromiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){

        let error = true
        if(!error){
            resolve({username: "abhishek", pass:"1234664"})
        }
        else{
            reject('Error: Something went wrong')
        }

    },1000)
})

PromiseFour.then((user) =>{
    console.log(user);
    return user.username
    
}).then((username)=>{
console.log(username);

}).catch(   function(err){
    console.log(err);
    
}).finally(function(){
    console.log("The promise is either resolved or rejected!");
    
})
