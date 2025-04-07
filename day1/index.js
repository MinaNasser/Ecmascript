// console.log(num) // undefined;
// let num = 10; // error

// console.log(num); // 10
for (var i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
console.log("i = ",i); // 5

// useing let
for (let j = 0; j < 5; j++) {
  console.log(j); // 0 1 2 3 4
}
// console.log("j = ",j); // error

var a = 10;
var a = 20; // no error if using let it will give error
console.log(a); // 20

// let b = 10;
// let b = 20; // error

// hoisting
//block scope
// function scope
// lexical scope
// closure


// using const  
const c = 10;
// c = 20; // error

console.log("c = ",c); // 10

let obj = {
  name: "John",
  age: 30,
};

//copying object using Object.assign
let obj1 = Object.assign({}, obj); // {name: obj.name, age:obj.age}
let obj2 = {...obj};// spread operator =={name: obj.name, age:obj.age} }
obj2.name = "Doe"; // changing the value of name in obj2
console.log(obj); // { name: 'John', age: 30 }
console.log(obj2); // { name: 'Doe', age: 30 }
console.log(obj1); // { name: 'John', age: 30 }

let person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};

let person1 = {...person}; // shallow copy
let person2 = Object.assign({}, person); // shallow copy
let person3 = {...person, address: {...person.address, state: "CA", zip:12345}}; // deep copy


console.log(person); // { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } }   
console.log(person1); // { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } }
console.log(person2); // { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } }
console.log(person3); // { name: 'John', age: 30, address: { city: 'New York', state: 'CA', zip: 12345 } }

// use array
let arr = [1, 2, 3, 4, 5];
let arr1 = [...arr]; // shallow copy
let arr2 = arr.slice(); // shallow copy
let arr3 = arr.map((item) => item); // shallow copy
let arr4 = arr.filter((item) => item); // shallow copy
let arr5 = arr.reduce((acc, item) => [...acc, item], []); // shallow copy
let arr6 = arr.reduce((acc, item) => acc.concat(item), []); // shallow copy
let arr7 = arr.reduce((acc, item) => [...acc, item], []); // shallow copy
let arr8 = arr.reduce((acc, item) => acc.concat(item), []); // shallow copy
console.log(
    arr,
    arr1,
    arr2,
    arr3,
    arr4,
    arr5,
    arr6,
    arr7,
    arr8
);
console.log(arr1 === arr); // false
console.log(arr2 === arr); // false
console.log(arr3 === arr); // false
console.log(arr4 === arr); // false


