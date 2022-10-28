// filter method 

// const numbers = [1,2,3,6,4,9,8];

// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });

// console.log(evenNumbers);


// reduce method 

const numbers = [1,2,1,4,5,6,];


const sum = numbers.reduce((accumulator , currentValue)=>{
return accumulator + currentValue;
},100);

// accumulator  ,  currentValue ,  retrun
//      1                2           3
//      3                1           4
//      4                4           8
//      8                5           13
//     13                6           19

// console.log(sum);

const userCart = [
    {productId: 1, productName: "mobile" , price:1200},
    {productId: 1, productName: "laptop" , price:1200},
    {productId: 1, productName: "tv" , price:1200},
    {productId: 1, productName: "keyboard" , price:1200},

]

const totalAmount=userCart.reduce((totalPrice, currentProduct)=>{
return totalPrice + currentProduct.price;

},0);

console.log(totalAmount);





