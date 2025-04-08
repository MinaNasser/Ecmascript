// 1.	Swap the values of two variables using destructuring 
let a = 10;
let b = 20;
[a,b] = [b,a];

console.log(a); // 20
console.log(b); // 10
//1.	Swap the values of two variables using destructuring  use destructuring object
let obj = {
  aa: 10,
  bb: 20
};

({ aa: obj.bb, bb: obj.aa } = obj);

console.log(obj.aa); // 20
console.log(obj.bb); // 10


/*
2

 */

function getMinMax(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return { min, max };
}
let arr = [1, 2, 3, 4, 5];
let { min, max } = getMinMax(...arr);
console.log(min); // 1  
console.log(max); // 5

/*
3.
*/

let student = {
  name: "John",
  University: "ABC",
  faculty: "Computer Science",
  finalGrade: "A",
};
let { name, University, faculty, finalGrade } = student;
console.log(`${name} is a student in faculty of ${faculty} in university ${University}And his final grad is ${finalGrade}.`);


/*
4.
*/
let countries = new Set();
countries.add("Egypt");
countries.add("USA");
countries.add("USA");
countries.add("France");
countries.add("Egypt");
console.log(countries);
for (let item of countries) {
  console.log(item); 
}
let countryList = ["Egypt", "USA", "USA", "France", "Egypt"];
let countriesSet = new Set(countryList);

let totalCount = countryList.length;//5

let uniqueCount = countriesSet.size;//3

let repeatedCount = totalCount - uniqueCount;

console.log("Repeated items:", repeatedCount); 




/*
5
*/

let students = new Map();

students.set("Negm", [
  { CourseName: "JavaScript", Grade: "Excellent" },
  { CourseName: "Jquery", Grade: "Good" },
  { CourseName: "React", Grade: "V.Good" },
  { CourseName: "ESNext", Grade: "Good" },
  { CourseName: "NodeJS", Grade: "V.Good" }
]);

students.set("Sara", [
  { CourseName: "JavaScript", Grade: "Good" },
  { CourseName: "Jquery", Grade: "Good" },
  { CourseName: "React", Grade: "Excellent" },
  { CourseName: "ESNext", Grade: "Excellent" },
  { CourseName: "NodeJS", Grade: "V.Good" }
]);
students.set("Ahmed", [
  { CourseName: "JavaScript", Grade: "Good" },
  { CourseName: "Jquery", Grade: "Good" },
  { CourseName: "React", Grade: "Good" },
  { CourseName: "ESNext", Grade: "Good" },
  { CourseName: "NodeJS", Grade: "Good" }
]);

for (let [studentName, courses] of students) {
  console.log(`Student: ${studentName}`);
  courses.forEach(course => {
    console.log(`  ${course.CourseName}: ${course.Grade}`);
  });
}

let studentSelect = document.getElementById("studentSelect");
let gradesContainer = document.getElementById("gradesContainer");
for (let studentName of students.keys()) {
  let option = document.createElement("option");
  option.value = studentName;
  option.textContent = studentName;
  studentSelect.appendChild(option);
}

studentSelect.addEventListener("change", function () {
  let selectedStudent = this.value;
  let courses = students.get(selectedStudent);

  gradesContainer.innerHTML = `<h3>${selectedStudent}'s Grades:</h3><ul>`;
  courses.forEach(course => {
    gradesContainer.innerHTML += `<li>${course.CourseName}: ${course.Grade}</li>`;
  });
  gradesContainer.innerHTML += `</ul>`;
});



/*
6.
*/

var fruits = ["apple", "banana", "cherry", "date", "elderberry","strawberry", "banana", "orange","mango"];

let allStrings = fruits.every(item => typeof item === "string");
console.log("All elements are strings:", allStrings); 

let someStartWithA = fruits.some(item => item.startsWith("a"));
console.log("Some elements start with 'a':", someStartWithA); 

let filteredFruits = fruits.filter(item => item.startsWith("b") || item.startsWith("s"));
console.log("Fruits starting with b or s:", filteredFruits); 
let likedFruits = fruits.map(item => `I like ${item}`);
console.log("Liked fruits messages:", likedFruits);

likedFruits.forEach(msg => console.log(msg));

