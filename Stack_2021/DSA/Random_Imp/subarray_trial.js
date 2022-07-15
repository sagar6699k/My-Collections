function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ");
    let res = [];
    function Sub_array(arr, n) {
        
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                let temp = "";
                for (let k = i; k <= j; k++) {
                    temp = temp + arr[k];
                }
                res.push(temp);
            }
        }

    }
    Sub_array(arr, n)
    console.log(res);
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`5
      a b c d e`);
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
    
  