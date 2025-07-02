// console.log("hello");
// var a =123;
// console.log(a);

// function abc(){
//     console.log("This is function");
//     function hgf(){
//         console.log("This is fxn HGF");

//     }
//     hgf();

// }

// abc();

// var b = 300;

// console.log(b);

// //glbal execution context 
// //arrow function
// var a = 200;
// console.log(a);

// xyz(); //error here because xyz is var and to be stored in variable

// var xyz = () => {
//     console.log("arrow");

// }

// {
//     //compound statement
//     //parent
//     var a = 100;
//     var b = 200;
//     var c = 300;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     {
//         console.log(a);
//         console.log(b);
//         console.log(c);

//     }

// }

// function abc() {
//     var a = 100;
//     var b = 200;
//     var c = 300;
  
//     function def() {
//         var d = 400;
//         const x = 4000;
//         function ijf() {
//             console.log(a);
//             console.log(b);
//             console.log(c);
//             console.log(d);
//             console.log(x);  
            
//         }
//         ijf();
//     }
//     def()

// }
// abc();


for (var i = 0; i <=5; i++) {
    function closure(i) {
        setTimeout(()=>{

        console.log(i);
        
    },2000)
  
    }
    closure(i);
    
}





