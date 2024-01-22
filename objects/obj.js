let car = {
    make:"Toyota",
    model:"Camry",
    year:2022,
    isElectric: false,
    start:function () {  //ananomyous function with name
        console.log("Engine started!");
    }
}

// console.log(car.make);
// console.log(car.year);
car.start();
console.log(typeof(car.start));