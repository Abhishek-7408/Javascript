//arrays

const myArr = [0,1,2,3,4,5,8]

 const myHeros = ["shaktimaan", "naagraj"]


 const myArr2 = new Array(1,2,3,4,5,6,7,8,9,10)

 console.log(myArr[1]);

 //Array methods

 myArr.push(6)

 console.log(myArr);

 myArr.push(8)

 console.log(myArr);
 myArr.pop()

 console.log(myArr);


 myArr.unshift(10)

 console.log(myArr);


 myArr.shift()

 console.log(myArr.includes(9));

 console.log(myArr.indexOf(9));

 const newrr = myArr.join()

 console.log(myArr);

 console.log(newrr);
 console.log(typeof newrr);



 // slice, splice

 console.log("A ",myArr);

 const myn1 = myArr.slice(1,3)
 

 console.log(myHeros);

 console.log(myn1);

 console.log("B ",myArr);
 
 const myar2 = myArr.splice(1,3)
 console.log("C ",myArr);


 console.log(myar2);
 
 



 




 
 



 