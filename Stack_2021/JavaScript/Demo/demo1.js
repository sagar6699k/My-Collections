// function Person() { };
// Person.prototype.name = "sagar";

// var obj = new Person();
// console.log(obj.name);

// function hoisting() {
//     console.log(a);

//     var a = "Hello"
// }
// hoisting();


//Class contructor.
class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age    
    }
}
const person1 = new Person('Sudhir', 26);

//Function contructor.
function Person_f(f_name, l_name) {
    this.f_name = f_name,
    this.l_name = l_name    
}

const person2 = new Person_f('Rohit', 'Sharma');
const person3 = new Person_f('Virat', 'Kohli');
console.log(person1);
console.log(person2);
console.log(person3);