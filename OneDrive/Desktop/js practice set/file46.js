class CreateUser{
constructor(firstName, lastName, email, age, address) {
    
    console.log("constructor called");
    this.firstName = firstName;
     this.lastName = lastName;
     this.email = email;
     this.age = age;
     this.address = address;
    
 }
 about(){
     return `${this.firstName}is ${this.age} year old.`;
 }
 is18(){
     return this.age >= 18;
 }
 
}
                 
     
     const user1 = new CreateUser('sagar' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 17, "kalpatru building");
     const user2= new CreateUser('alam' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 1, "kalpatru building");
     const user3 = new CreateUser('samlu' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 18, "kalpatru building");

    //  console.log(user1.lastName);
    console.log(Object.getPrototypeOf(user1));