
// arrow function 

// arrow func ka this nhi hota woh apne surround se leta hai 


function createUser(firstName,lastName,email,age,address){
const user ={};
user.firstName = firstName;
user.lastName = lastName;
user.email = email;
user.age = age ;
user.address = address;
user.about = function(){
    return `${this.firstName}is $(this.age)`
},
user.is18= function(){
    return this.age >=18;
}
return user;
}

const user1 = createUser('sagar' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 18, "kalpatru building");
console.log(user1);

const is18 = user1.is();
console.log(is18);