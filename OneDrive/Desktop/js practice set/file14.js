// ternary operator // conditional operator

let age = 8;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink);



// and or operator 

let firstName = "alam";
let age1 = 22;

if(firstName[0] === "a" && age1>18){
    console.log("name start with a and above 18");
}

// nested if else 

let winningNum = 10;
let userGuess = +prompt("Guess a number");
// console.log(typeof userGuess, userGuess);
if(userGuess == winningNum){
    console.log("your guess is right !!");
}else{
    if(userGuess < winningNum ){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}
// prompt string me value lega 







