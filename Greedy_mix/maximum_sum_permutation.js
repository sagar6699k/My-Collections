function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
   
   
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + (i * arr[i]);
    }
    console.log(sum)
  

    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      2 5 1 6`);
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