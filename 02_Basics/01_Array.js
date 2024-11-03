// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Monkey D luffy","Asta"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0],myHeors[1],myArr2[2]);

// Array Method

myArr.push(6)
myArr.push(7)
myArr.pop()

// myArr.unshift(9)
// myArr.shift()


console.log(myArr.includes(9));
console.log(myArr.indexOf(9));



//most use
const newArr = myArr.join()

console.log(myArr);
//  join make A array in string
// so we check its type
console.log(typeof newArr);



// also most used 
// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
// also print my orginal array
console.log("B ",myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


// **********************************************

const Anime = ["One Piece","Bleach","Naruto","Black Clover"]
const character = ["Lufffy","Ichigo","Naruto","Asta"]

Anime.push("JJK")
console.log(Anime);
console.log(Anime[3][1]);


// concat is a array which mrege both array but give the value in other Array
const allAnime = Anime.concat(character)
console.log(allAnime);

// spend 
const all_new_Anime = [...Anime, ...character]
console.log(all_new_Anime)


// rarely use
const anoher_array = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]]

const real_another_array = anoher_array.flat(Infinity)
// not to use infinity mostly use what to what dept we want
console.log(real_another_array);



console.log(Array.isArray("Abhay"))
// this is not array so false
console.log(Array.from("Abhay"))
console.log(Array.from({name: "Abhay"})) //is a empty bcz it not prefer the it should in what type of array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of is to give a set of elemt