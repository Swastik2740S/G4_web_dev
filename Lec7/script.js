//events in a web browser  1.scroll 2.click 3.move 4.resize

console.log("Script Start");

//Event capturing
// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandparent.addEventListener("click", () => {
//     console.log("Red");
// },true);


// parent.addEventListener("click", () => {
//     console.log("Green");
// },true);
// child.addEventListener("click", () => {
//     console.log("Blue");
// },true);

//Event Bubbling
// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandparent.addEventListener("click", () => {
//     console.log("Red");
// },true);


// parent.addEventListener("click", () => {
//     console.log("Green");
// },true);
// child.addEventListener("click", () => {
//     console.log("Blue");
// },true);
//event delegation

// const productlist = document.getElementById('productslist');
// productlist.addEventListener("click",(event) => {
//    if(event.target.tagName==="LI"){
//     console.log("Clicked : ", event.target.textContent);
//    }  
// })

const textBox = document.getElementById("textBox");
let timeoutId;
textBox.addEventListener("input", (event) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        console.log("type", event.target.value);
    }, 2000);
});

///debouncing 



