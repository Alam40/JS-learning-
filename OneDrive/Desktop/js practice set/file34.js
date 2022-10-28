// find method 

// alag value find krne ke liye 

//  const users = [
//     {userId: 1, userName: "alam"},
//     {userId: 2, userName: "naaz"},
//     {userId: 3, userName: "kaaz"},
//     {userId: 4, userName: "saaz"},
//     {userId: 4, userName: "vaaz"},

//  ];

//  const myuser=users.find((user)=>user.userId===4);
//  console.log(myuser);


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 15000},
    {productId: 3, productName: "tv", price: 17000},
    {productId: 4, productName: "bags", price: 13000},

]

const ans = userCart.some((cardItem)=> cardItem.price > 10000);
console.log(ans);
 