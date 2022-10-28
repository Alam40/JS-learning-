// use const for creating arrays

// 
const fruits = ["apple", "banana"];
const fruits2 = [];

// fruits.push("mango");

// console.log(fruits);

// loop chalane ke liye 

// let i=0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toLocaleUpperCase());
//     i++;
// }

// console.log(fruits2);

// for in loop in arrays 

for(let fruit of fruits){
    fruits2.push(fruit.toLocaleUpperCase());
}

console.log(fruits2);