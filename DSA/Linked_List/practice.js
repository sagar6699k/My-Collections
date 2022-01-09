

//Contructor function

// function UsersInfo(n , a , g) {
    
//     this.name = n,
//     this.age = a,
//     this.gender = a

// }

// let person1 = new UsersInfo("Sagar" , 25 , "male");
// let person2 = new UsersInfo("Tushar" , 27 , "male");
// let person3 = new UsersInfo("Guarav" , 31 , "male");
// console.log('person1:', person1)
// console.log('person2:', person2)
// console.log('person3:', person3)




//Constroctor function using class

class Info {

    constructor(n , a , g ){

        this.name = n,
        this.age = a,
        this.gender = g
     
    }

    born () {
        return 2021 - this.age
    }
}

let p1 = new Info("Sagar" , 26 , "male");
console.log('p1:', p1)
console.log(p1.born());

