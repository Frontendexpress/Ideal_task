console.log('Start');

const promise1 = new Promise((resolve, reject) => {
    console.log('Promise 1');
    resolve();
});

promise1.then(() => {
    console.log('Promise 1 resolved');
});

const promise2 = new Promise((resolve, reject) => {
    console.log('Promise 2');
    setTimeout(() => {
        resolve();
        
    }, 3000);
});

promise2.then(() => {
    console.log('Promise 2 resolved');
});


const promise3 = new Promise((resolve, reject) => {
    console.log('Promise 3');
    resolve();
});

promise3.then(() => {
    console.log('Promise 3 resolved');
});

console.log('End');


// order is

// Start -->call    
// Promise 1 -->call
// Promise 2 -->call
// Promise 3 -->call
// End -->call 
// Promise 1 resolved -->call : wait until stack empty
// Promise 3 resolved --> call: wait until stack and Queue empty
// Promise 2 resolved -->call: wait until stack and Queue empty

//queue: promise1 promise 3 promise 2
