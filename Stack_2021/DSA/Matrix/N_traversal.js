function N_traversal(mat,sz){
    var box = [];
    
    //up
    for(var i = mat.length-1; i>=0; i--){
        box.push(mat[i][0]);
    }
    
    // diagonal
    for(var i = 1; i < mat.length; i++){

        for(var j = 1; j < mat.length; j++){
            if(j == i){
                box.push(mat[i][j]);
            }
        }

    }

    //up
    for(var i = mat.length-2; i>=0; i--){
        box.push(mat[i][sz-1]);
    }

    console.log(box.join(" "));
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
        
        N_traversal(matrix,size)
    }

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      3
      1 2 3
      4 5 6
      7 8 9
      3
      11 12 13
      14 15 16
      17 18 19`);
      
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