// function returning function 

// function me function return krne ke liye 



function myFunc(){
    function hello(){
        return "hello alam"
    }
    return hello;
}

const ans = myFunc();
console.log(ans());