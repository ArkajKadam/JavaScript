let a =10   //global scope
let b =20   //global scope
var c =30  //global scope

// console.log(a);
// console.log(b);
// console.log(c);


if (true) {
    let d =10
    let e =20
    var f =30
    g = 50
    let a = 100
    console.log("Inner : ",a);
    
    
    
}

// console.log(e);   it will give error
// console.log(f);   it will give error
// console.log(f);     // this will work because od "var"
// console.log(g);    // this also work but it is problematic  

console.log(a);   //global scope


function one() {
    const  username = "Arkaj"

    function two() {
        const website = "Youtube"
        console.log(username);        // eg : lower level can not ask facilities of higher level
                                      //      but higher level can access facilities in lower level
    }
    // console.log(website);

    // two()
 
}

// one()

if (true) {
    const  username = "Arkaj"

    if (username == "Arkaj") {
        const website = "Youtube"
        // console.log(username + website);        // eg : lower level can not ask facilities of higher level
                                      //      but higher level can access facilities in lower level
    }
    // console.log(website);     error 2
    

}
 

// console.log(username);   error = 2




// ++++++++++++++++++++++++++++++++++++++++++++++  Interesting  +++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(1)) // moving befor funtion     this will work
function addOne(num) {
    return num + 1
}

addOne(1)


addTwo(5) // this will give error because cannot access 'addTwo' before initialization
 const addTwo = function num(num) {
        return num +2
    
 }
    
   
addTwo(5)

