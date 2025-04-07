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