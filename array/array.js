//creating an array
let fruits = ["apple", "banana", "orange", "grape"];

//  adding elements to the end
fruits.push("kiwi");
console.log("adding elements to the end : "+fruits);

//  adding elements to the beggining
fruits.unshift("mango");
console.log("adding elements to the beggining : "+fruits);

//  deleting last element
let removedLast = fruits.pop();
console.log("Removed from last:"+removedLast);
console.log(fruits);

//  deleting first element
let removedFirst = fruits.shift();
console.log("Removed from first "+removedLast);
console.log(fruits);

//finding index of an element
let indexOfOrange = fruits.indexOf("orange");
console.log("index of orange: "+indexOfOrange);

//Iterating using a for loop
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}

// splicing an array (modifying original array)
let removed = fruits.splice(1,2,"pear", "melon");
console.log("splicing an array: "+removed);

// concatenating arrays
let moreFruits =["grapefruit", "pineapple"]
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);