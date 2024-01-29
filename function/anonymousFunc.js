// Callback Function

const parentFunction=(name, callback)=>{
    setTimeout(callback,1000);
    console.log("Hey "+name);
}

parentFunction("Random String", ()=>{
    console.log("Hey I am callback function");
});