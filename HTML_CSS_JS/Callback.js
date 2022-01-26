function Greet_Person(name) {
    console.log("Good Morning",name);
}

function Outer(callback) {
    // let name = prompt("Enter your name here") // open it on browser
    let name = "Sagar"
    callback(name);
}

Outer(Greet_Person)


//A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let's take a simple example of how to use callback function