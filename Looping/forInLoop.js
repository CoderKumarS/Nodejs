// Iterates over the properties of a object
let person = { name: "John", age: 30, occupation: "Developer" };

for (let key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        console.log(person[key]);
    }
}
