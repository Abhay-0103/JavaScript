// what is functions
// functions is ntg but where we can put number of input and call it by only using a single function or package where we have inserted

// console.log("A");
// console.log("b");
// console.log("h");
// console.log("a");
// console.log("y");

function sayMyName() {
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("y");
}
sayMyName()

function addTwoNumbers(number1,number2) {
    // numb1,num2 are called parameter
    console.log(number1 + number2)
}
addTwoNumbers(3, null) // its called arrgemen t


function addTwoNumbers(number1,number2) {


    // 1st method

    // let result = number1 + number2
    // return result

    // 2nd method
    return number1 + number2 
}


const result = addTwoNumbers(3,5)

console.log("Reault:", result);


function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Abhay"))
console.log(loginUserMessage())
console.log(loginUserMessage("Abhay")) // overwritting 

//********************************************************************************
