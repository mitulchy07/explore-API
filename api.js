// const user = { id: 1, name: "Hasan Chowdhuri", profession: "Student" };


// const stringify = JSON.stringify(user);

// console.log(stringify);


// console.log("this is Connected..")

function loadData() {

    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(response => response.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Users first and last name: ${user.name} ; Username: ${user.username} `;
        ul.appendChild(li);
    }
}



const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log(stuInfo.name);