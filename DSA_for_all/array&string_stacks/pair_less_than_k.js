function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split(" ").map(Number).sort((a,b)=>a-b);
        line++;
        let k = Number(array[line].trim());
        line++;

        console.log(findAnswer(n, arr, k));        
    }

    function findAnswer(n, arr, k) {
        
        for (let i = n-1; i >=1 ; i--) {
            let sum = arr[0] + arr[i];
            if (sum < k) {
                return sum;
            }
        }

        return -1;
    }

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      5
      1 2 3 4 5
      7
      3
      30 10 20
      15`);
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
    