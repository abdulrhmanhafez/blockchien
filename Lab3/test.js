// "use strict";


// function user (name , salry ){
//     obj = {};
//     obj.name = name; 
//     obj.salary = salry ;

//     return obj;
// }




class User {
    #password
    constructor(name, salary , password) {
        this.name = name;
        this.salary = salary;
        this.#password = password;
    }
    
    display(){
        return `Name : ${this.name} , Salary ${this.salary}`
    }
    set updateSalry(salary){
        this.salary = salary;
    }

    getPassword (){
        return this.#password;
    }

    static numberObject(){
        return "satic"
    }
}

class SuperUser extends User{
 
    constructor(name , salary , email , password ){
        super(name , salary , password);
        this.email = email;
        
    }

    display(){
        return `Name : ${this.name} , Salary ${this.salary} , Email ${this.email} , password: ${this.getPassword()}`;
    }

    // display(name){
    //     return `Name : ${name} , Salary ${this.salary} , Email ${this.email}`;
    // }

    static numberObject(){
        return "satic child"
    }


}

let user = new User("Eslma" , 50000);
user.updateSalry = 10
let superUser = new SuperUser("Ahmed" , 6000 , 'ahmed@gmail.com' , 1212);

console.log( "Password" , superUser.getPassword())

console.log(User.numberObject());
console.log(superUser.display());

console.log(SuperUser.numberObject())