//Description:[leetcode]
//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.



function runProgram(input) {

    var num = Number(input)

    function SumDigit(num) {

        if ((num >= 0) && (num < 10))  return num;
           
        else 
            var dig = num.toString().split("").map(Number)
            var sum = 0;
            for (var i = 0; i < dig.length; i++) {
                sum += dig[i] 
            }
            return SumDigit(sum)
    }
   
    console.log(SumDigit(num));
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`38`);
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