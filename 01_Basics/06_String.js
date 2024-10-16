const name = "Abhay "
const CountNumber = 50

// console.log(name + CountNumber );
// not to use this type of command

// moden way is called string interpolation 
console.log(`Hello My Name Is ${name} And i have Count Number 1 to ${CountNumber}`);


const gameName = new String('Abhay..-blah blah')
console.log(gameName[0]);
console.log(gameName.__proto__);



// some objects 
console.log(gameName.length); 
console.log(gameName.toUpperCase());
// for getying at what chart the value is present 
console.log(gameName.charAt(2));

// for getting at what index the value is present
console.log(gameName.indexOf('h'));



const newString = gameName.substring(0,4)
// in subString what end value we are giving it wont count it count its preivise one 
console.log(newString);



// In slice we can use -ve value but in substring we cant use -ve value
const anotherString = gameName.slice(-16,3)
console.log(anotherString);


// in trim we can remove thre space in String
const newStringOne = "  Abhay  "
console.log(newStringOne);
console.log(newStringOne.trim());



const url ="https://Abhay.com/Abhay%20Singh"

console.log(url.replace('%20','-'))


// to ask qustion 
console.log(url.includes('yoohoo'))
// if the value is presen the it will show true if not false

console.log(gameName.split('-'));