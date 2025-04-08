// fetch function:
// https://jsonplaceholder.typicode.com/users

let Users ;
 fetch('https://jsonplaceholder.typicode.com/users')
.then(function (res) {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res.json();
})
.then(function (data) {
    Users = data;
    console.log(Users);// for testing
    displayUserTabs(Users);
})
.catch(function (error) {
    console.log(error);
})
function displayUserTabs(users) {
    const tabsContainer = document.getElementById("tabs");
  
    users.forEach(user => {
      const tab = document.createElement("div");
      tab.classList.add("tab");
      tab.textContent = user.username;
      tab.dataset.userId = user.id;
  
      tab.addEventListener("click", async () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        await fetchAndDisplayTodos(user.id);
      });
  
      tabsContainer.appendChild(tab);
    });
  }

async function fetchAndDisplayTodos(userId) {
    const todosContainer = document.getElementById("todos");
    todosContainer.innerHTML = "Loading...";
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
      if (!response.ok) throw new Error("Failed to load todos");
  
      const todos = await response.json();
      displayTodos(todos);
    } catch (error) {
      todosContainer.innerHTML = `<p style="color:red;">Error loading todos: ${error.message}</p>`;
    }
  }
  
  
  function displayTodos(todos) {
    const todosContainer = document.getElementById("todos");
    todosContainer.innerHTML = "";
  
    todos.forEach(todo => {
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
  
      const statusClass = todo.completed ? "completed" : "not-completed";
      const statusText = todo.completed ? " Completed" : " Not Completed";
  
      todoDiv.innerHTML = `<strong>${todo.title}</strong> - <span class="${statusClass}">${statusText}</span>`;
      todosContainer.appendChild(todoDiv);
    });
  }
  
// console.log(Users)
