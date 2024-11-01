// Date 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());



console.log(typeof myDate);
// object

// fist method
let myCreatedDate = new Date(2024, 0, 21);
console.log(myCreatedDate.toDateString())

// second mathod
let myCreatedDate2 = new Date(2024, 0, 21, 7, 3);
console.log(myCreatedDate2.toLocaleString());

// third mentod
let myCreatedDate3 = new Date("2024-03-01");
console.log(myCreatedDate3.toLocaleString());

// time stamp
let mytimeStamp = Date.now()
console.log(mytimeStamp);
console.log(myCreatedDate.getTime());

// minsec
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);



// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
    
})
