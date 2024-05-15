//What is the 6th Fibonachi number;
//0 1 1 2 3 5 8 13 21 34 ...(n + (n-1))
let n = 6;

function fibonachi(n) {

    if (n === 1 || n === 0) return n;

    return fibonachi(n - 1) + fibonachi(n - 2)
}

// console.log(fibonachi(n));

//Without recursion 
function withoutRecursionFibonachi(n) {
    let fiboNumber = 1
    for (let i = 2; i < array.length; i++) {
        const element = array[i];

    }
}


//test
// function Person(name) {
//     this.name = name;
//     this.age = 21;
// }

// var object = new Person("Sudheer");
// console.log(object);

function replaceEveryThirdCharacter(str) {
    let result = '';
    let i = 0;
    while (str.length > 0) {
      i++;
      let newChar = str.substring(0,1);
      str = str.substring(1);
      if (i % 3 === 0) {
        result += 'X';
      } else {
        result += newChar;
      }
    }
    return result;
  }

// console.log(replaceEveryThirdCharacter("Sagarm"));

var x={},
  y={key:"y"},
  a={key:"z"},
  z={key:"z"};
x[y] = 11;
x[z] = 21;
x[a] = 43;
// console.log(x[y]);

let arr = [1, 2, 3]
arr.splice(1,1)
// console.log(arr);

class MyClass {
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("Hello this is " + this.name)
    }
}
steve = new MyClass("steve");
steve.greet();
