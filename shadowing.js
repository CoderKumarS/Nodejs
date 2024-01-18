// local variable can "shadow" global variables with the same name.
// The local variable takes precedence within its scope
var shadowedVar="I am global"
function exampleFunction() {
    var shadowedVar="I am local"
    console.log(shadowedVar);
}
console.log(shadowedVar);
exampleFunction();