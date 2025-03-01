let myName = "Arkaj    "

// console.log(myName.length);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "Hammer",
    spiderman : "sling",

    getSpiderPower : function(){
          console.log(`Spidy power is ${this.spiderman} `);
          
    }

}

Object.prototype.hitesh = function(){
    console.log(`hitech is present in all object`);
    
}

Array.prototype.Arkaj = function(){
    console.log(`Arkaj says hii to everyone`);
    
}

// heroPower.hitesh()
//myHeros.hitesh()


// heroPower.Arkaj()
// myHeros.Arkaj()




// inheritance

const user = {
    name : "Arkaj",
    email : "abc@gmail.com"
}
const Teacher = {
    makeVideo : true,
}

const TeachingSupport = {
    isAvalable : false
}

const TAsupport= {
    makeAssignment : 'js Assignment',
    fulltime : true,
    __proto__ : TeachingSupport
}

Teacher.__proto__ = user

// MOdern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)




let anotherUsername = "Chai      "
String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    // console.log(this);
    console.log(`True length is : ${this.trim().length}`);
    
    
}
anotherUsername.trueLength()

"Arkaj".trueLength() 