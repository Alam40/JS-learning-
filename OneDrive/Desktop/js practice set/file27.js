//  rest parameters 

// function addAll(...numbers){
//     let total =0;
//     for(let number of numbers){
// total = total + number ;

//     }
//     return total;
// }
//  const ans = addAll(4,5,7,5,4,4,);
//  console.log(ans);


// parameters distructuring

const person = {
    firstname: "alam",
    age : 24,
    gender: "male",
}

function printDetails({firstname , gender ,age}){
    console.log(firstname);
    console.log(gender);
    console.log(age);
}

printDetails(person);

