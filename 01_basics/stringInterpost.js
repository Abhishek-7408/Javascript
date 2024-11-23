const name = "abhishek"  


const repoCount = 50


console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);


const gameName = new String("abks-hd")

console.log(gameName);
console.log(typeof gameName); 

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));


console.log(gameName.indexOf('a'));
console.log(gameName.indexOf('k'));


const newStr = gameName.substring(0,4)


console.log(newStr);


const anotherStr = gameName.slice(-8,4)

console.log(anotherStr);

const newSStr = "     hitest    "

console.log(newSStr);
console.log(newSStr.trim());


const url = "https://abhishek.com/hitesh%20kushewa"

console.log(url.replace('%20', '-'));














