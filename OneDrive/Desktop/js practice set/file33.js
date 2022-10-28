// const numbers = [ 5,3,8,200,410];

// // numbers.sort((a,b)=>{
// //     return a-b;
// // });

// numbers.sort((a,b)=>b-a);

// // assending order ke liye a-b 
// // desending order ke liye b-a 
// console.log(numbers);


// price lowToHigh  Hightolow

const products = [
    {productId: 1, productName: "p1",price: 100},
    {productId: 2, productName: "p2",price: 200},
    {productId: 3, productName: "p3",price: 300},
    {productId: 4, productName: "p4",price: 400},
    {productId: 5, productName: "p5",price: 500},

]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
   return a.price - b.price
});
console.log(lowToHigh);