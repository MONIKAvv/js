/*
datatype  ---> primeetive and non-primeetive datatype ---> kis trah se data ko memory main store kiya jaayega 
primitive --->  7 types: String, Number, Boolean, Null(puri khali), undefined, symbol--used to make any value unique , bigInt---> scientific values  

non-primitive ---> reference datatype 
            Array, objects, functions




*/

const score = 100; // hame define nhi karni par rhi ye number h y string
const scoreValue = 9.7
const isloggedIn = false
const outsideTemperatur = null;
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bignumber = 2345678856453544n

console.log(typeof bignumber);

const heroes = ["iron man", "mr america"];

const  obj = {
  name: "monika",
  age: 45,
}

const myfunction = function(){
  console.log("hellow World");
}

console.log(typeof myfunction);
const nullnum = null
console.log(typeof nullnum);
console.log(typeof anotherId);