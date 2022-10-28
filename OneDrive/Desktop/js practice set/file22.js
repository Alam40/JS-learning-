// object 
// arrays are good but not sufficient 
// for real world data 
// object store key value pairs 
// object don't have index 


// how to create object 
// const person = {
//     name : "alam",
//     age : 24,
//     hobbies : ["sona","khana","rona"]
// }
// console.log(person);


// how to access data form object 

// console.log(person.hobbies);
// console.log(person["age"]);

// how to add key value pair to object 

// person.gender = "male";
// person["gender"] = "male";
// console.log(person);

// difference between dot and bracket nataion
const key = "email";
const person = {
    name : "alam",
    age : 24,
  " person hobbies" : ["sona","khana","rona"]
}

console.log(person[" person hobbies"]);

// person["gender"] = "male";
// console.log(person);

person[key] = "alamshahnavaz1@gmail.com"
console.log(person);