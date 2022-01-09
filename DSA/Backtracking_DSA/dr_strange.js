function runProgram(input) {

    var N = Number(input)

    function strange(N, res) {
        if (res.length <= N) return res;

        for (let i = 1; i <= N; i++) {
            let curr = i;

            res.push(curr)
            return strange(curr+1, res)
        }
    }
   
    let res = [];
    console.log(strange(N, res));
    
  
  
  
    
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