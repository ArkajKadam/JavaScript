// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regulerUser = {
    email : "someone@gmail.com",
    fullname : {
        userfullname : {
            firstName : "Arkaj",
            lastName : "Kadam"


        }
    }

}


//console.log(regulerUser.fullname.userfullname.firstName);

const obj1 = {1 : "A",
    2 : "B"
}

const obj2 = {3 : "C",
    4 : "D"

}

// const obj3 = { obj1, obj2}
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);

const obj4 = Object.assign({},obj1, obj2)
console.log(obj4);

const obj5 = {...obj1, ...obj2}
console.log(obj5);


//******************************************* Part = 2 *******************************************************

const coures = {
    couresName : "JavaScript",
    prise : "999",
    courseTeacher : "hitesh"

}

//course.courseTeacher

const {couresName} = coures
console.log(couresName);

const {couresName : Corse} = coures
console.log(Corse);


// const navbar = ({company}) => {

// }                                             React concept

// navbar(company = "Arkaj")

 


// json
// {
//      "name" : "Arkaj",
//      "couresName" : "Js in hindi",
//      "price" : "Free"

// }


//  [
//     {},
//     {},
//     {},
//  ]