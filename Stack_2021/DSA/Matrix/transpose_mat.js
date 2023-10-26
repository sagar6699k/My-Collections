function runProgram(input) {

    var arr = input.trim().split("\n");
    var rc = arr[0].trim().split(" ").map(Number);
    var r = rc[0];
    var c = rc[1];
    
    
    var mat = []

    for(var i = 1; i <= r; i++){

        mat.push(arr[i].trim().split(" ").map(Number));

  }
  // console.log("Mat", mat);

    for(var i = 0; i < c; i++){
            var trans = [];
        for(var j = 0; j < r; j++){

            trans.push(mat[j][i]);

        }
        console.log(trans.join(" "));
    }
    
  
    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5 4
      0 0 0 0
      1 1 1 1
      2 2 2 2
      3 3 3 3
      4 4 4 4`);
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