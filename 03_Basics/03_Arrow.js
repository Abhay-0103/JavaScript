const user = {
    username: "Abhay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "yoohoo"
user.welcomeMessage()

console.log(this) // empty 

function onePiece(){
    console.log(this);
}

onePiece()


// **********************************************
const BlackClover = function() {
    let username = "Asta"
    console.log(this.username)
}

BlackClover() // undefined

// now using arrow function
const BlackClover1 = () => {
    let username = "Asta"
    console.log(this.username)
}

BlackClover1()

// arrow fuction
// 1st Mentod
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,2))
//2nd Mentod
const addTwo1 = (num1, num2) => num1 + num2
console.log(addTwo1(3,2))
//3rd Method
const addTwo2 = (num1,num2) => (num1 + num2)
console.log(addTwo2(3,2))
// returning object 
const addTwo3 = (num1,num2) => ({username:"Abhay"})
console.log(addTwo3(3,4))
