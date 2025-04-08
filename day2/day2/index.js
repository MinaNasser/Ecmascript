// How Js Work ???


// console.log("first");
// // HOF
// setTimeout(function () {
//   console.log("second")
// }, 1000)
// setTimeout(function () {
//   console.log("four")
// }, 100)

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log("third");

// first
// third  // second
// second // third

// function getUsers(cb, cb2) {
//   console.log("first")
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://dummyjson.com/users")
//   xhr.send();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       let users = JSON.parse(xhr.responseText).users;
//       //console.log(users)
//       cb(users[1].id, cb2);
//     }
//   }
// }
// function show(users) {

//   console.log(users);
// }
// function getPosts(userId, cb) {
//   console.log(userId)
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://dummyjson.com/posts/user/${userId}`)
//   xhr.send();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       let posts = JSON.parse(xhr.responseText).posts;
//       console.log(posts)
//       cb(posts[1].id)

//     }
//   }
// }

// function getComments(postID) {
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", `https://dummyjson.com/posts/${postID}/comments`)
//   xhr.send();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//       let comments = JSON.parse(xhr.responseText).comments;
//       console.log(comments)

//     }
//   }
// }

// getUsers(getPosts, getComments);






function display() {
  return new Promise(function (resolve, reject) {

    setTimeout(function () {
      let random = Math.random() * 10;
      console.log(random)
      if (random > 5) {
        resolve("ok")
      }
      else {
        reject("error")
      }
    }, 1000)

  })
}

// let res = display();
// res.then(function (data) {
//   console.log(data);
// }).catch(function (err) {
//   console.log(err)
// })

function fetchUsers() {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dummyjson.com/users")
    xhr.send();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        let users = JSON.parse(xhr.responseText).users;
        //console.log(users)
        resolve(users);
      }
    }

  })
}
function fetchPosts(userId) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://dummyjson.com/posts/user/${userId}`)
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        let posts = JSON.parse(xhr.responseText).posts;
        console.log(posts);
        if (posts.length == 0) {
          reject("no posts");
        }
        else
          resolve(posts)

      }
    }
  })
}

// let users = fetchUsers()

// users.then(function (data) {
//   return fetchPosts(data[1].id)

// }).then(function (id) {
//   console.log(id);
// }).catch(function (err) {
//   console.log(err)
// })



// async function main() {
//   // let users = await fetchUsers();
//   // console.log(users)
//   // let posts = await fetchPosts(users[1].id);
//   // console.log(posts)

//   let res = await fetch('https://dummyjson.com/posts');
//   let data = await res.json();
//   console.log(data.posts)

// }

// main()
fetch('https://dummyjson.com/posts').then(function (res) {
  return res.json()
}).then(function (data) {

  return fetch(`https://dummyjson.com/posts/${data.posts[1].id}`)
}).then(function (res) {
  return res.json()
}).then(function (data) {
  console.log(data)
}).catch(function (err) {
  console.log(err)
})
console.log("hi")