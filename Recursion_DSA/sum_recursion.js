function SumNumbers(len, numbers) {
    if (len <= 0)   return 0; 
       
    let sum = numbers[len - 1]
    return sum + SumNumbers(len-1, numbers) ;
}


function runProgram(input) {

    var arr = input.trim().split("\n")
    let T = Number(arr[0].trim());
    let line = 1; 

    for (let i = 1; i <= T; i++) {
        let len = Number(arr[line].trim());
        line++;
        let numbers = arr[line].trim().split(" ").map(Number);
        line++;

        console.log(SumNumbers(len , numbers));
    }
   
    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      5
      6 3 8 2 -4
      5
      -10 -7 10 2 -2
      5
      -4 -5 6 -3 9`);
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