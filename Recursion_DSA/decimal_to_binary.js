let DecimalToBinary = (res, N) => {
    
    if(N === 1 || N === 0) return res.push(N)

    res.push(N % 2);

    return DecimalToBinary(res, Math.floor(N/2))
    
}



function runProgram(input) {

    var arr = input.trim().split("\n");

    let T = Number(arr[0]);
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let N = Number(arr[line].trim());
        line++;

        let res = [];
        DecimalToBinary(res, N);
        console.log(res.reverse().join(""));
    }
   

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      15
      128`);
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