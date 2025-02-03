let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());

console.log(typeof(myDate));


let currentDate = new Date(2023,0,12) // mounth start with 0 means jan = 0
console.log(currentDate.toDateString());
console.log(currentDate.toLocaleString());
console.log(currentDate.getTime());


let myTimeStamp = Date.now()

console.log(myTimeStamp);

let newDate = new Date
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

