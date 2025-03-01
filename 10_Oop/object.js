function multiplaeBy5(num) {
    return num*5
}

console.log(multiplaeBy5(5));

multiplaeBy5.power = 4

console.log(multiplaeBy5.power);
console.log(multiplaeBy5.prototype);


function creatUser(username, score){
    this.username = username
    this.score = score
}

creatUser.prototype.increment = function () {
    this.score++
    
}
creatUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new creatUser("chai", 40)
const tea = new creatUser("Tea", 100)

chai.printMe()