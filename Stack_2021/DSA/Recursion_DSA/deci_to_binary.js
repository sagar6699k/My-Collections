//Just different way of writting recursion program.
//here you don't need to reverse the res.

let DecimalToBinary = (res, N) => {
    
    if (N === 0) return ;

    else {
        DecimalToBinary(res, Math.floor(N/2))
        res.push(N%2)
    }
    
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
        console.log(res.join(""));
    }
   

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      16
      25`);
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