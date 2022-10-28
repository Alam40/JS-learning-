// function inside function 
// function ke aunder function 

function  app(){
const myfunc = ()=>{
    console.log("hello from myFuc")
}
const addTwo = (num1 , num2) =>{
    return num1 + num2;
}

const mul = (num1 , num2) => num1 * num2;
console.log("inside loop");
myfunc();
console.log(addTwo(3,4));
console.log(mul(5,8));
}

app();

