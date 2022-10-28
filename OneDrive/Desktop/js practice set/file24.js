// arrays ke aunder loop chaane ke liye


// const users =[
//     {userId: 1, firstName: 'alam', gender: 'male'},
//     {userId: 2, firstName: 'alam', gender: 'male'},
//     {userId: 3, firstName: 'alam', gender: 'male'},
//     {userId: 4, firstName: 'alam', gender: 'male'},

// ]
// for(let user of users ){
//     console.log(user.userId);
// }

// nested destructing 
const users =[
    {userId: 1, firstName: 'alam', gender: 'male'},
    {userId: 2, firstName: 'alam', gender: 'male'},
    {userId: 3, firstName: 'alam', gender: 'male'},
    {userId: 4, firstName: 'alam', gender: 'male'},
]
const [user1, user2, user3, user4] =users;
console.log(user1);