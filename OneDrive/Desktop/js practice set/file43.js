const myCreate= {
    about: function(){
        return `${this.firstName}is ${this.age}`
    },
    is18 : function(){
        return this.age >=18;
    }, 

    issing : function(){
        return 'hduhddebdhebjdedejdnejne';
    }
    }

    
    
    function createUser(firstName,lastName,email,age,address){
        const user =Object.create(myCreate); // __proto__ me jakar obejct dekhege
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.age = age ;
        user.address = address;
       
        return user;
        }
        
        const user1 = createUser('sagar' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 18, "kalpatru building");
        const user2= createUser('alam' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 18, "kalpatru building");
        const user3 = createUser('samlu' , 'samlubhayyyy' , 'sagarchomu@gmail.com', 18, "kalpatru building");
    // console.log(user1.about());
    // console.log(user2.about());
    // console.log(user3.about());

    console.log(user1);
        
       