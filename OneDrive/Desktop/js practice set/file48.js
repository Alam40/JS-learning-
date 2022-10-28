// getter and setter 

// prropertieski tarah use krte hai 

class person {
    constructor(firstName, lastName , age){
this.firstName = firstName;
this.lastName = lastName;
this.age = age ;
    }

    // get use krne se woh properties define kreaga
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const[firstName,lastName] = fullName.split(" ");
this.firstName = firstName;
this.lastName = lastName;
    }
}
const person1 = new person("alam" ,"shah" , 8);
// console.log(person1.fullName);
person1.fullName = "samlu bhayyyy";
console.log(person1);
console.log(person1.fullName);