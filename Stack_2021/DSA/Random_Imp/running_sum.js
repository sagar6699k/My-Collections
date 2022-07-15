function runningSum(sz,itm){
    var SUM = [];
    var sum = 0;
    for (let i = 0; i < sz; i++) {
        sum = sum + itm[i];
        SUM.push(sum);
        
    }
    console.log(SUM.join(" "));
}

function runProgram(input) {

    var arr = input.trim().split("\n");
    var T = Number(arr[0]);

    var line = 1;
    for (let i = 0; i < T; i++) {
        var size = Number(arr[line].trim());
        line++;
        var items = arr[line].trim().split(" ").map(Number);
        line++;
        
        runningSum(size,items);
    }
    
   
    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      5
      1 2 3 4 5`);
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