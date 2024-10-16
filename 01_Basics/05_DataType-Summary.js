// primitive

// 7 types : String, Number, Boolean, null, undfined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//symbol
// const id = symbol('123')
// const anotherId = symbol('123')

// console.log(id === anotherId);

// const bigNumber = 4363343333665434323n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Ben10","Ash","Luffy"];
let myobj = {
    name: "Abhay",
    age: 21,
}

const myFunction = function(){
    console.log("Hello Bhai");
}

console.log(typeof heros);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Type of memory 

// Stack(premittive type use) and Heap(Non premittive type use)

let myfirstname = "Abhay";

let mysecondname = "Singh";
mysecondname = "Lucky";

console.log(myfirstname)



let userOne = {
    email : "blah123@gmail.com",
    upi : "user@sbi"
}

let userTwo = userOne;

userTwo.email = "anyone123@gmail.com"
console.log(userOne)
console.log(userTwo)