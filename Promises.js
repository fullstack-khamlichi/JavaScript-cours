const done = false;

// Creating promises
// let promise1 = new Promise((resolve, reject) => {
//     if(done){
//         const workIsDone = 'Work has been completed'
//         resolve(workIsDone)
//     } else {
//         reject('Work has not been completed!!')
//     }
// });

//Consuming the promise
// promise1
//     .then(result => console.log(`Promise 1: ${result}`)) //This will be executed when the promise resolves successfully
//     .catch(err => console.error(err))
//     .finally(() => console.log("finished")) // Loader will disappear either if there was a problem or not


// Chaining promises
// https://jsonplaceholder.typicode.com/

const status1 = response => {
    if (response.ok) {
        return response.text();
    }
    return Promise.reject(new Error(response.status))
}
const json = text => JSON.parse(text);
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(status1)
    .then(json)
    .then(data => console.log(data))
    .catch(err => console.log(err))
    //.catch(console.log) // alternative

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))