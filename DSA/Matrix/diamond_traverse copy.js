function diamondTraverse(sz,mat){
    var r_mid = Math.floor(sz / 2);
    var c_mid = Math.floor(sz / 2);
    var top = 0;
    var left = 0;
    var right = sz-1;
    var bottom = sz-1;

    var res = [];
    for (let i = r_mid; i >=0 ; i--){
        for (let j = right; j >=0 ; j++){
            if(Math.abs(i-j) == r_mid)
            res.push(mat[i][j])
        }
    }
    console.log(res.join(" "));
}


function runProgram(input) {

    var arr = input.trim().split("\n");
    var T = Number(arr[0]);
    var line = 1;

    for (let i = 0; i < T; i++) {
        var size = Number(arr[line].trim());
        line++;
        var matrix = [];
        for (let i = line; i < line+size; i++) {
            matrix.push(arr[line].trim().split(" ").map(Number));
            
        }
        diamondTraverse(size,matrix);
        line += size;
    }
   

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      3
      1 2 3
      4 5 6
      7 8 9`);
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