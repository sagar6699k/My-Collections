function runProgram(input) {
  var array = input.trim().split("\n");
  let T = Number(array[0].trim());

  let dp = Array(2000 + 1)
    .fill(-1)
    .map((x) => Array(2000 + 1).fill(-1));

  // console.log(dp);

  let line = 1;

  for (let i = 1; i <= T; i++) {
    var item = array[line].trim().split(" ").map(Number);
    var S = item[0];
    var N = item[1];
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
    if (N === 0 || S === 0) return 0; //Base condition

    if (dp[N][S] !== -1) return dp[N][S];

    if (wt[N - 1] <= S) {
      return (dp[N][S] = Math.max(
        val[N - 1] + OptimizeSolution(wt, val, S - wt[N - 1], N - 1),
        OptimizeSolution(wt, val, S, N - 1)
      ));
    } else if (wt[N - 1] > S) {
      return (dp[N][S] = OptimizeSolution(wt, val, S, N - 1));
    }
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
