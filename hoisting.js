// The first console.log(x) outputs undefined because the declaration is hoisted, but the assignment (x=5)
//HOsting with Variable
// function exampleFunction() {
//     console.log(x);
//     // var x = 5
//     const x = 5
//     // let x=5 //Error: Cannot access 'x' before initialization
//     console.log(x);
// }
// exampleFunction();

//HOsting with Variable
exampleFunction();
function exampleFunction() {
    console.log("Hello World!");
}
