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
