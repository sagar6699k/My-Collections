function sum_diff(size , array) {
   if (size <= 1) {
       return 0;
    }
    
    let diff = Math.abs(array[size - 1] - array[size - 2]);
    return sum_diff(size - 1, array) + diff;
}



function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim())
    
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let size = Number(arr[line].trim());
        line++;
        let array = arr[line].trim().split(" ").map(Number);
        line++;
        
        console.log(sum_diff(size , array))
        
    }
   

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      3
      1 5 2
      5
      3 5 6 1 8`);
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