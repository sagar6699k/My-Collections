// Recursive Code:
//let gcd = (num1, num2) => {
    
//     if(num2 === 0){
//        return num1;
//     }
    
//     //call the same function recursively
//     return gcd(num2, num1 % num2);
 
//  }


//Linear Approach
// let gcd = (num1, num2) => {
  
//     //Loop till both numbers are not equal
//     while(num1 != num2){
      
//       //check if num1 > num2
//       if(num1 > num2){
//         //Subtract num2 from num1
//         num1 = num1 - num2;
//       }else{
//         //Subtract num1 from num2
//         num2 = num2 - num1;
//       }
//     }
    
//     return num2;
//   }




function GCD(a, b) {

  if (a === 0) {
      return b;
  }
  return GCD(b%a, a);
  
}


function runProgram(input) {

  var array = input.trim().split("\n");
  let T = Number(array[0].trim());
  for (let i = 1; i <= T; i++) {
      let [a, b] = array[i].trim().split(" ").map(Number);

      console.log(GCD(a, b));

  }
 
  
 
  



  
  }
  if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`2
    8 14
    51 68`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
}
  
