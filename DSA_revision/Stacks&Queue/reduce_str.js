// Description

// Given a string of lowercase characters in range ascii[‘a’..’z’].
// You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.
// For instance, the string aab could be shortened to b in one operation.
// Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).
// Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).
// I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose








function runProgram(input) {

    var arr = input.trim().split("");
    let stack = [];
    //aaabccddd
    
    for (let i = 0; i < arr.length; i++) {

        if (stack.length !== 0 && stack[stack.length-1] === arr[i]) {
            stack.pop();
        }
        else {
            stack.push(arr[i]);
        }
    }
    
    if (stack.length !== 0) {
        console.log(stack.join(""));
    } else {
        console.log("Empty String");
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`aaabccddd`);
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
    
  
  
  