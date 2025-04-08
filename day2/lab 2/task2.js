let select = document.getElementById("user-select");
let showBtn = document.getElementById("show-btn");
let userDetails = document.getElementById("user-details");

let usersData = [];

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        usersData = users;
        console.log(users);
        populateDropdown(users);
        showBtn.disabled = false;
    })
    .catch((error) => {
        select.innerHTML = `<option>Error fetching users</option>`;
        console.error("Error fetching users:", error);
    });

function populateDropdown(users) {
    
        const defaultOption  = document.createElement("option");
        defaultOption.textContent = "Select User";
        // defaultOption.disabled=true;
        defaultOption.selected=true;
        select.appendChild(defaultOption);
        for (let user of users) {
            const option = document.createElement("option");
            option.textContent = user.name;
            option.value = user.id;
            select.appendChild(option);
        }
}


showBtn.addEventListener("click", () => {
    const selectedId = parseInt(select.value);
    const selectedUser = usersData.find(user => user.id === selectedId);
  
    if (selectedUser) {
      userDetails.innerHTML = `
        <h3>${selectedUser.name}</h3>
        <p><strong>Username:</strong> ${selectedUser.username}</p>
        <p><strong>Email:</strong> ${selectedUser.email}</p>
        <p><strong>Phone:</strong> ${selectedUser.phone}</p>
        <p><strong>Company:</strong> ${selectedUser.company.name}</p>
        <p><strong>Website:</strong> <a href="http://${selectedUser.website}" target="_blank">${selectedUser.website}</a></p>
      `;
    }
    else {
      userDetails.innerHTML = "<p>Select a user to view details.</p>";
    }
  });
