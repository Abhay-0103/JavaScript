// singleton
// object.create not to use later we will




// object literals

const mysym = Symbol("key1")

const jsUser = {
    name: "Abhay",
    "full name" : "Abhay Singh",
    [mysym] : "mykey1",
    age: 21,
    location : "UP KA LADKA HU",
    email: "abhay@banacrorepati",
    isLoggedIn : false,
    lastLoginDays: [" Monday", "Sunday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mysym])


jsUser.email = "Abhay@kareCoding"
// Object.freeze(jsUser)
jsUser.email = "Abhay@GanaGaye"
console.log(jsUser);


jsUser.greeting = function(){
    console.log("Ka ho ka hal ba");
}

jsUser.greetingTwo = function(){
    console.log(`Ka ho ka hal ba ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



// *********************************************************

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

 console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhay",
            lastname: "Singh"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }
 //const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
 console.log(obj3);


const users = [
    {
        id: 1,
        email: "ab@gmail.com"
    },
    {
        id: 1,
        email: "ab@gmail.com"
    },
    {
        id: 1,
        email: "ab@gmail.com"
    },
]

users[1].email
 console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "javascript",
    price: "$0",
    courseInstructor: "Abhay"
}

 // course.courseInstructor

const {courseInstructor: instructor} = course

 //.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Abhay",
//     "coursename": "javascipt",
//     "price": "$0"
// }

[
    {},
    {},
    {}
]
