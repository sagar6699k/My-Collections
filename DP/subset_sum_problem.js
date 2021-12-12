function runProgram(input) {

    var array = input.trim().split("\n");
    let S = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    let n = arr.length

    let dp = Array(n + 1).fill(0).map(x => Array(S + 1).fill(0));

    function SubsetSumProblem(arr, S, n) {
        for (let i = 0; i < n+1; i++) {
            for (let j = 0; j < S+1; j++) {
                if (i === 0) {
                    dp[i][j] = false;
                }

                if (j === 0) {
                    dp[i][j] = true;
                }
              }
        }

        for (let i = 1; i < n+1; i++) {
            for (let j = 1; j < S+1; j++) {
                if (arr[i-1] <= j) {
                    dp[i][j] = (dp[i][j-arr[i-1]] || dp[i-1][j])
                }

                else {
                    dp[i][j] = dp[i-1][j]
                }
               
              }
        }

        return dp[n][S];
    }
   

    console.log(SubsetSumProblem(arr, S, n));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`11
      2 3 7 8 10`);
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
    
  
  