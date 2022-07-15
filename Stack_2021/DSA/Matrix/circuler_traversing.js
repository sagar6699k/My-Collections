function travelCircular(mat,sz){

    //1st up
   var res = [];
    for(var i = sz-1; i >= 0; i--){
       res.push(mat[i][0]);
    }
  

    //2nd right

    for(var i = 1; i < sz; i++){
        res.push(mat[0][i]);
    }

  

    // 3rd down

    for(var i = 1; i < sz; i++){
        res.push(mat[i][sz-1])
    }

    

    // 4th left

    for(var i = sz-2; i>= 1; i--){
        res.push(mat[sz-1][i])
    }

    console.log(res.join(" "));
}


function runProgram(input) {

    var arr = input.trim().split("\n");
    var T = Number(arr[0]);

    var line=1;
    for(var i = 0; i < T; i++){
        var matrix = [];
        var size = Number(arr[line]);
        line++;
        for(var j = line; j < line+size; j++){
            matrix.push(arr[j].trim().split(" ").map(Number));
        }
        line = line + size;
        
        travelCircular(matrix,size)
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