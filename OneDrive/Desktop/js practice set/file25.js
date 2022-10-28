// arrow function 

const kyakre = ()=> {
    console.log("aur batao dost kya kre")
}
kyakre();

// one perameter arrow function

const isEven = number => number % 2 === 0;

console.log(isEven(13));

const findTargets = (array , target) =>{
    for(let i=0; i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    retrun -1;
}

//
 const isEvens = (num1 , num2) =>{
return num1 % 2 === 0;
 }
 console.log(isEvens(10));