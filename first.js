// Function scoped using var

// function exampleFunction() {
//     if (true) {
//         var functionScopedVar = "I am function-scoped"
//     }
//     console.log(functionScopedVar);// "I am function-scoped"
// }
// exampleFunction();

// console.log(functionScopedVar);//Error: functionScopedVar is not defined

// Block scoped using let

// function example2Function() {
//     if (true) {
//         let blockScopedVar = "I am block-scoped"
//         console.log(blockScopedVar);// "I am block-scoped"
//     }
//     // console.log(blockScopedVar);// ReferenceError: blockScopedVar is not defined
// }
// example2Function();

// console.log(blockScopedVar);//Error: blockScopedVar is not defined

// use let, var and const

function exampleFunction() {
    if (true) {
        var functionScopedVar = "I am function-scoped";
        let blockScopedLet = "I am block-scoped";
        const blockScopedConst = "I am constant and block-scoped";
    }
    console.log(functionScopedVar);//I am function-scoped
    // console.log(blockScopedLet);//Error: blockScopedLet is not defined
    // console.log(blockScopedConst);//Error: blockScopedConst is not defined
}
exampleFunction();