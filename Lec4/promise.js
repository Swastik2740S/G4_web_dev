/**
 * Promises are objects used to handle asynchronous operations in JavaScript.
 * They represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
 * A promise can be in one of three states:
 * - pending: Initial state, neither fulfilled nor rejected.
 * - fulfilled: Operation completed successfully.
 * - rejected: Operation failed.
 */
// promises are the objects which is used to make async function 
// status -> fullfilled, pending, rejected after that return 

var a = [2, 2, 6, 46]
const swastikpromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        for (let i = 0; i < a.length; i++) {

            if (a[i] % 2 != 0) {
                reject("even number dallo")
            }
            else {
                resolve("even number hai")
            }

        }
    }, 2000)
})

// swastikpromise.then((res) => {
//     console.log("Me getting salary");
//     console.log(res);
// })
//     .catch((err) => {
//         console.log("not got placed");

//     })

//error handling
/* promise apis 
1.promise.all
2.promise.allSettled
3.promise.race
4.promise.any
*/


const assignment1 = new Promise((resolve, reject) => setTimeout(() => reject("Assignment 1 done"), 1500));
const assignment2 = new Promise((resolve, reject) => setTimeout(() => reject("Assignment 2 done"), 2500));
const assignment3 = new Promise((resolve, reject) => setTimeout(() => reject("Assignment 3 done"), 500));
const assignment4 = new Promise((resolve, reject) => setTimeout(() => reject("Assignment 4 done"), 1700));


Promise.all([assignment1, assignment2, assignment3, assignment4])
    .then((results) => {
        console.log("All assignments completed:");
        console.log(results);
    }).catch((err) => console.log("Error hai bhai", err));


// Promise.allSettled([assignment1, assignment2, assignment3, assignment4])
//     .then((results) => {
//         console.log("chal gya");
//         console.log(results);  
//     }).catch((err)=>{
//         console.log(err);
//         console.log("Assignment krr bhen ke ")
        
//     })


// Promise.race([assignment1, assignment2, assignment3, assignment4])
//     .then((results) => {
//         console.log("chal gya");
//         console.log(results);  
//     }).catch((err)=>{
//         console.log(err);
//         console.log("Assignment krr bhen ke ")
        
//     })



Promise.any([assignment1, assignment2, assignment3, assignment4])
    .then((results) => {
        console.log("All assignments completed:");
        console.log(results);
    }).catch((err) => console.log("Error hai bhai", err));

