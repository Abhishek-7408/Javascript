const user = {

    name: "Chai",
    email: "email@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
makeAssign: 'JS assignment',
fullTime:true,
__proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TASupport,Teacher)



let anotherName = "Chaiaurcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(` true lenght ${this.name}`);


    
}