function runProgram(input) {
  var array = input.trim().split("\n");
  let T = Number(array[0].trim());

  let dp = Array(2000 + 1)
    .fill(0)
    .map((x) => Array(2000 + 1).fill(0));

  // console.log(dp);

  let line = 1;

  for (let i = 1; i <= T; i++) {
    var item = array[line].trim().split(" ").map(Number);
    let S = item[0];
    let N = item[1];
    line++;
    let wt = [];
    let val = [];

    for (let j = 0; j < N; j++) {
      var item1 = array[line].trim().split(" ").map(Number);
      wt.push(item1[0]);
      val.push(item1[1]);
      line++;
    }

    console.log(OptimizeSolution(wt, val, S, N));
  }

    
    
    
  function OptimizeSolution(wt, val, S, N) {
    
      for (let i = 0; i < N+1; i++) {
        for (let j = 0; j < S+1; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = 0;
            }
          }
      }

      
      for (let i = 1; i < N+1; i++) {
        for (let j = 1; j < S+1; j++) {
            if (wt[i-1] <= j) {
              dp[i][j] = Math.max( (val[i-1] + dp[i-1][j-wt[i-1]] ), dp[i-1][j]);
            }

            else {
              dp[i][j] = dp[i-1][j]
            }
        }
      }


      return dp[N][S]
    }
    


}
if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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
