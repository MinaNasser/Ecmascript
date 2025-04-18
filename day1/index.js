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



function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20)); // 30

function sum(a, b,...rest) { 
    let sum = a + b;
    // rest is an array of the remaining arguments
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

console.log(sum(10, 20, 30, 40, 50)); // 150


// let aa=arr[0]; // 1
// let bb=arr[1]; // 2

let [aa, bb] = arr; // destructuring
console.log(aa, bb); // 1 2
let [a1, a2, ...rest] = arr; // destructuring
console.log(a1, a2, rest); // 1 2 [ 3, 4, 5 ]


let Obj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
};
let { name, age, address: { city, state } } = Obj; // destructuring
console.log(name, age, city, state); // John 30 New York NY



// use for  of
let str = "hello world";
for (let char of str) { 
  console.log(char); // h e l l o   w o r l d
}
// use for  in  
let objw = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
  },
    hobbies: ["reading", "traveling", "swimming"],
};
for (let key in objw) {
  console.log(`${key}:: ${objw[key].address || objw[key]}`); // name John age 30 address { city: 'New York', state: 'NY' } hobbies [ 'reading', 'traveling', 'swimming' ]
}

let arrw = [1, 2, 3, 4, 5];
for (let index in arrw) {
  console.log(index, arrw[index]); // 0 1 1 2 2 3 3 4 4 5
}

// use  Set and Map
let map = new Map([
  ["name", "John"],
  ["age", 30],
  ["address", { city: "New York", state: "NY" }],
]);
console.log(map); // Map(3) { 'name' => 'John', 'age' => 30, 'address' => { 'city' => 'New York', 'state' => 'NY' } }


let set = new Set([1, 1,2, 3, 4, 5, 6]);
set.add(0); // add 0 to set
set.delete(1); // delete 1 from set
set.clear(); // clear set
set.add(1); // add 1 to set
set.add(2); // add 2 to set
set.add(3); // add 3 to set

set.add(4); // add 4 to set
set.add(5); // add 5 to set
set.add(6); // add 6 to set
console.log(set); // Set(6) { 1, 2, 3, 4, 5, 6 }
for (let item of set) {
  console.log(item); // 1 2 3 4 5 6
}




// use date structure tree

let mp = new Map();
mp.set(10,"DAS"); // empty map
mp.set("name", "John");
mp.set("age", 30);
mp.set("address", { city: "New York", state: "NY" });
console.log(mp); // Map(3) { 'name' => 'John', 'age' => 30, 'address' => { 'city' => 'New York', 'state' => 'NY' } }

console.log(mp.get(10)); // DAS
console.log(mp.get("name")); // John

for (let [key, value] of mp) {
  console.log(key, value); // 10 DAS name John  
// age 30 address { city: 'New York', state: 'NY' } 
}

for (let key of mp.keys()) {
  console.log(key); // 10 name age address
}
for (let value of mp.values()) {
  console.log(value); // DAS John 30 { city: 'New York', state: 'NY' }
}
for (let [key, value] of mp.entries()) {
  console.log(key, value); // 10 DAS name John age 30 address { city: 'New York', state: 'NY' }
}
for (let [key] of mp) {
  console.log(mp.get(key));
}
console.log("####################");
// use forEach
mp.forEach((value, key) => {
  console.log(key, value); // 10 DAS name John age 30 address { city: 'New York', state: 'NY' }
});
console.log("####################");
// build in function of array

let array = [1, 2, 3, 4, 5];
console.log(array.map((item) => item * 2)); // [ 2, 4, 6, 8, 10 ]
console.log(array.filter((item) => item % 2 === 0)); // [ 2, 4 ]
console.log(array.reduce((acc, item) => acc + item, 0)); // 15
// indexOf
console.log(array.indexOf(3)); // 2
// lastIndexOf
console.log(array.lastIndexOf(3)); // 2
// includes
console.log(array.includes(3)); // true
// find
console.log(array.find((item) => item > 3)); // 4
// findIndex
console.log(array.findIndex((item) => item== 3)); // 2
// some
console.log(array.some((item) => item > 3)); // true
// every
console.log(array.every((item) => item > 3)); // false
// fill 
// console.log(array.fill(0)); // [ 0, 0, 0, 0, 0 ]
// join
console.log(array.join()); // 1,2,3,4,5
// reverse
console.log(array.reverse()); // [ 5, 4, 3, 2, 1 ]
// sort
console.log(array.sort()); // [ 1, 2, 3, 4, 5 ] 
// splice
console.log(array.splice(1, 2)); // [ 2, 3 ]
// slice
console.log(array.slice(2, 3)); // [ 5]
// concat
console.log(array.concat([6, 7, 8])); // [ 1, 4, 5, 6, 7, 8 ]
// flat
console.log(array.flat()); // [ 1, 2, 3, 4, 5 ]
// flatMap
console.log(array.flatMap((item) => [item * 2])); // [ 2, 4, 6, 8, 10 ] 

let found = array.findIndex(function(value){
    return value ==4; 

}); // findIndex
console.log(found); // 1

