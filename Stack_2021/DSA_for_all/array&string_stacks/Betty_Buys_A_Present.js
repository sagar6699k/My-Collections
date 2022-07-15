// Description
// Betty and Archie are best friends and since Archie's birthday is in one week, Betty wants to buy a present for him. She goes to the gift shop and selects a gift of price P. Betty has 9 coins each of value from 1 to 9 respectively. Find out the different in which Betty can pay for the gift such that she can only use K coins.
// Input
// Input Format
// The first line contains price P of the gift and number of coins K she can use.

//input             output
//8 2               1 7
//                  2 6
//                  3 5


function runProgram(input) {

    var [n,k] = input.trim().split(" ").map(Number)
    console.log(birthdayShopping(n, k));

  function birthdayShopping(n, k) {
        
    
    }
    

   
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`8 2`);
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