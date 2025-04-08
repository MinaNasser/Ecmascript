// // // console.log("first");
// // // setTimeout(function() {
// // //     console.log("second");
// // // }, 1000);
// // // console.log("third");

// // function getUsers(cb) {
// //   let xhr = new XMLHttpRequest();
// //   xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
// //   let users ="Not Found";
// //   xhr.send();
// //   xhr.onload = function () {
// //     if (xhr.status === 200 && xhr.readyState === 4) {
// //       users = JSON.parse(xhr.responseText);
// //       // console.log(data);
// //       cb(users,users[0].id);
// //     }
// //   };
// //   // return users;
// // }


// // function ShowUsers(users) {
// //   console.log(users);
// // }
// // let  users = getUsers(ShowUsers);

// // // GetPosts();

// // function getPosts(cb ,userId) {
// //   let xhr = new XMLHttpRequest();
// //   console.log(userId);
// //   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+userId+"", true);
// //   let posts = "Not Found";
// //   xhr.send(); 
// //   xhr.onload = function () {
// //     if (xhr.status === 200 && xhr.readyState === 4) {
// //       posts = JSON.parse(xhr.responseText);
// //       // console.log(data);
// //       cb(posts,userId);
// //     }
// //   };
// //   // return posts;
// // }

// // function ShowPosts(cb,userId) {
// //   console.log(posts);
// // }
// // let posts = getPosts(ShowPosts);

// // // get Comments
// // function getComments(cb,postId) {
// //   let xhr = new XMLHttpRequest();
// //   // let postId = cb.id;
// //   console.log(postId);
// //   xhr.open("GET", "https://jsonplaceholder.typicode.com/comments?postId="+postId+"", true);
// //   let comments = "Not Found";
// //   xhr.send(); 
// //   xhr.onload = function () {
// //     if (xhr.status === 200 && xhr.readyState === 4) {
// //       comments = JSON.parse(xhr.responseText);
// //       // console.log(data);
// //       cb(comments);
// //     }
// //   };
// //   // return posts;
// // } 
// // function ShowComments(postId) {
// //   console.log(comments);
// // }

// function getData() 
// {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
//     xhr.send();
//     xhr.onload = function () {
//       if (xhr.status === 200 && xhr.readyState === 4) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject("Error fetching data");
//       }
//     };
//   });

// }

// let users = getData().then((data) => {
//   console.log(data);
// }).then((Posts) => {
//   return getPosts(Posts);
// })

//   .catch((error) => {
//   console.error(error);
// });



// getData().then((data) => {
//   console.log(data);
// }
// ).catch((error) => {
//   console.error(error);
// });
// function getPosts(userId) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=" + userId, true);
//     xhr.send();
//     xhr.onload = function () {
//       if (xhr.status === 200 && xhr.readyState === 4) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject("Error fetching data");
//       }
//     };
//   });
// }
// getPosts(1).then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.error(error);
// });
// function getComments(postId) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/comments?postId=" + postId, true);
//     xhr.send();
//     xhr.onload = function () {
//       if (xhr.status === 200 && xhr.readyState === 4) {
//         resolve(JSON.parse(xhr.responseText));
//       } else {
//         reject("Error fetching data");
//       }
//     };
//   });
// }
// getComments(1).then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.error(error);
// });


// // use async await
// async function fetchData() {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// console.log("####################");
// let userswait ;
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) =>{
//     console.log(data)
//     userswait = data;
//   } 
// )
//   .catch((error) => console.error(error));

let Users;
let Posts;
let Comments;

async function main() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  Users = await res.json();
  console.log(Users);

  let userId = Users[0].id;
  let res2 = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
  Posts = await res2.json();
  console.log(Posts);

  let postId = Posts[0].id;
  let res3 = await fetch("https://jsonplaceholder.typicode.com/comments?postId=" + postId);
  Comments = await res3.json();
  console.log(Comments);
}

main();


  let sum = (a,b) => a+b;

  console.log(sum(1,2));

  let obj = {
    name: "ahmed",
    age: 25,
    address: "cairo",
    sayHello: function() {
      setTimeout(function() {
        console.log(this,"Hello");
      }, 1000);
      // console.log("Hello");
    }
  }

  obj.sayHello();