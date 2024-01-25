// Synchronous Callback Function
// first randomFunction will execute
function parentFunction(name, callback){
    callback();
    console.log("Hey "+name);
}
function randomFunction(){
    console.log("Hey I am callback function");
}
parentFunction("Random String", randomFunction);