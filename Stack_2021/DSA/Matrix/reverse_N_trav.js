function revTravel_N(mat,sz){
    var box = [];
    //down

    for(var i = 0; i < sz; i++){
        box.push(mat[i][0]);
    }
   

    //up_diagonal

    for(var i = sz-2; i >= 0; i--){

        for(var j = 1; j < sz; j++){
            if(i+j == sz-1){
                box.push(mat[i][j])
            }
        }

    }

    
    //down
    for(var i = 1; i < sz; i++){
        box.push(mat[i][sz-1]);
    }

    console.log(box.join(" "));
}





function runProgram(input) {

    var arr = input.trim().split("\n");
    var T = Number(arr[0]);
    
    var line = 1;
    for(var i = 0; i < T; i++){
        var matrix = [];
        var size = Number(arr[line]);
        line++;
        for(var j = line; j < line+size; j++){
            matrix.push(arr[j].trim().split(" ").map(Number));

        }
        line = line+size;

        revTravel_N(matrix,size);
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