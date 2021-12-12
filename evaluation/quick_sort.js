function QuickSort(array) {
    
}


function runProgram(input) {

    var Input = input.trim().split("\n");
    let len = Number(Input[0].trim());
    let array = Input[1].trim().split(" ").map(Number)
    console.log(QuickSort(array))

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      2 3 1 4 5`);
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