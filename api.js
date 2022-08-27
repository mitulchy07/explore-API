// const user = { id: 1, name: "Hasan Chowdhuri", profession: "Student" };


// const stringify = JSON.stringify(user);

// console.log(stringify);


// console.log("this is Connected..")

function loadData() {

    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}