// for of

//Syntax =
//        for (const element of object) {
        
//        }

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }






// const greeting  = "Hello world"
// for (const letter of greeting) {  
//     if (letter==" ") {
//         continue
//     }
//     console.log(`Each character is ${letter}`)

// }




//Maps

const map = new Map()

map.set('IN' , "Mumbai")
map.set('JAP' , "Tokiyo")
map.set('USA' , "New York")
map.set('IN' , "Mumbai")
//console.log(map);

for (const key of map) {
    //console.log(kay);
    
}

for (const [key, Value] of map) {
    //console.log(key, ":-", Value);
    
}






const myObj = {
    'game1' : "NFS",
    'game2' : "GTA",
    'game3' : "Spiderman"

}

for (const [key, Value] of myObj) {
    console.log(key, ":-", Value);
    
}   // it not working for object