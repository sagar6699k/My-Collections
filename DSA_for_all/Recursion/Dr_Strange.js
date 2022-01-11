function GenerateSubsequence(str, new_str, current) {
    
    if (new_str.length > 0) {
        console.log(new_str.join(" "));
    }
    if (current === str.length) return;

    for (let i = current; i < str.length; i++) {
        new_str.push(str[i]);
        GenerateSubsequence(str, new_str, i + 1);
        new_str.pop();
        
    }

}


function runProgram(input) {

    var n = Number(input);
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
   
    let current = 0;
    let new_str = [];
    GenerateSubsequence(arr, new_str, current)
    
  
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3`);
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
    