// call 
 function about(hobby , khana){
    console.log(this.firstName , this.age, hobby , khana);
}

const user1 ={
    firstName : "alam",
    age : 15,
    
}

const user2 = {
    firstName : "alamama",
    age : 25 ,
    
}

about.call(user2,"kk" , "chicken");

// apply
// about.apply(user1,["ar", "ghass"]);

// bind  
// bind ek func return krta h 

// const myFunc = about.bind(user2, "rafi shahab" , "chai");
// myFunc();