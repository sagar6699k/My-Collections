function Greet_Person(name) {
    console.log("Good Morning",name);
}

function Outer(callback) {
    // let name = prompt("Enter your name here") // open it on browser
    let name = "Sagar"
    callback(name);
}

Outer(Greet_Person)

//A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let's take a simple example of how to use callback function.




//Why do we need callbacks
// The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.

function firstFunction(){
    // Simulate a code delay
    setTimeout( function(){
      console.log('First function called');
    }, 1000 );
  }
  function secondFunction(){
    console.log('Second function called');
  }
//   firstFunction();
//   secondFunction();
  
//   Output
  // Second function called
  // First function called


  //As observed from the Output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.


  //Callback hell
//Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

const getStudentInfo = () => {
    let roll_no = [1, 2, 3, 4, 5];
    console.log(`Student Information`);
    setTimeout(() => {
        console.log(`The present roll numbers are ${roll_no}`);

        setTimeout((rollNo) => {
            console.log(`Roll No: ${rollNo}`);
            console.log(`My Name is Rohit`);

            setTimeout(() => {
                console.log(`I am 25 years old`);
            }, 2000);

        }, 2000, roll_no[1]);

    }, 2000);
}

getStudentInfo()