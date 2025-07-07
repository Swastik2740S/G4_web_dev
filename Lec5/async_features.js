function welcomestudents(welcome, goodbye){
    return welcome + " " + this.studentname + " is a student of class " + this.studentclass + " " + goodbye;
}

const student1= {
    studentname:"yoyo",
    studentclass:"ukg"
}

const student2={
    studentname:"woow",
    studentclass:"nursery"
}

// welcomestudents.call(student1,"goodmorning","bye");
// welcomestudents.call(student2,"goodevening","bye bye");

console.log(welcomestudents.bind(student1, "goodmorning", "bye")());
console.log(welcomestudents.bind(student2, "goodevening", "bye bye")());

// Example usage:
// console.log(welcomestudents.myApply(student1, ["goodmorning", "bye"]));
// console.log(welcomestudents.myApply(student2, ["goodevening", "bye bye"]));

//currying

function sumofthree(a) {
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

console.log(sumofthree(10)(20)(30))

// Example: Adding an event listener to a button element

// Create a button element and add it to the document body
const btn = document.createElement('button');
btn.textContent = 'Click Me';
document.body.appendChild(btn);

// Add an event listener to the button
btn.addEventListener('click', function() {
    alert('Button was clicked!');
});
