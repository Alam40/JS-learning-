// new keyword 

// 1 = empty object krta h khud se jo this = {} rakhta h

// 2 = return  this {}

// yhe poora construction function hai 

function CreateUser(firstName, lastName, email, age, address) {
   this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
   
}
CreateUser.prototype.about= function(){
    return `${this.firstName}is ${this.age} year old.`;
};
CreateUser.prototype.is18=function(){
    return this.age >= 18;
}


                
    
    const user1 = new CreateUser('sagar' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 17, "kalpatru building");
    const user2= new CreateUser('alam' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 1, "kalpatru building");
    const user3 = new CreateUser('samlu' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 18, "kalpatru building");
// console.log(user1);
// console.log(user2);


// keys dekhne ke liye 
// for(key in user1){
    // console.log(key);

// }