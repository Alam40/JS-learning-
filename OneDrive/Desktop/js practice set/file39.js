// method 
// function inside object 

function personInfo(){
    console.log(`person name is ${this.firstName}`)
}
const person1 = {
    firstName : "alam",
    age : 15,
    about : personInfo
    
}
const person2 = {
    firstName : "slam",
    age : 17,
    about : personInfo
    
}
const person3 = {
    firstName : "nlam",
    age : 18,
    about : personInfo
    
}

person1.about();
person2.about();
    
