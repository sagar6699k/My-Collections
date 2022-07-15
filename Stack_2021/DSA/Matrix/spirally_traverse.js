function runProgram(input) {

    var arr = input.trim().split("\n");
    var n = Number(arr[0].trim());

    var mat = [];
    for(var i = 1; i <= n; i++){
        mat.push(arr[i].trim().split(" ").map(Number));
    }
    //console.log(mat);
    var left = 0;
    var top = 0
    var right = n-1;
    var bottom = n-1;

    var res = [];
  while (top <= bottom && left <= right){

      for (let i = left; i <= right; i++){
          res.push(mat[top][i])
      }
      top++;
      
      for (let i = top; i <= bottom; i++){
          res.push(mat[i][right])
      }
      right--;

      for (let i = right; i >= left; i--){
          res.push(mat[bottom][i])
      }
      bottom--;

      for (let i = bottom; i >= top; i--){
          res.push(mat[i][left])
      }
      left++;

    }

    console.log(res.join(" "));

    


  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      1 2 3 4
      5 6 7 8
      1 2 3 4
      5 6 7 8`);  
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