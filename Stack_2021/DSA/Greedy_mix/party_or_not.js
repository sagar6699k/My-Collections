// Problem Statement:
// Ashutosh has N friends and he wants to give a party to his C friends on his birthday.

// Ashutosh knows the amount he will have to spend on each of his N friends in party. Given the expense amount of each of the N friends, comment if it is possible for Ashutosh to give a party to his C friends if he has just R rupees
//First line contains three space separated integers: N, C and R respectively



function runProgram(input) {

    var array = input.trim().split("\n");
    var [n, c, r] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    
    let sum = 0;
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum <= r) {
            count++;
        }
        else {
            break;
        }
    }

   if (count === c) {
       console.log("Party");
   } else {
       console.log("Sad");
   }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5 3 24
      6 4 21 20 13`);
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