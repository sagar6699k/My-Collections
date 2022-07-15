function CheckDuplicate(arr, n) {
    let count = 0;
    if (n === 1) {
        return "NO"
    }
    else {
        for (let i = 0; i < n-1; i++) {
            for (let j = i+1; j < n; j++) {
                if (arr[i] === arr[j]) {
                    count++;
                }
            }
        }
    }

    if (count > 0) {
        return "YES"
    }
    else {
        return "NO"
    }
}



function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;
    
        console.log(CheckDuplicate(arr, n));
    }
    
   
    
  

    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      1
      1
      2
      1 1
      3
      1 2 3`);
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