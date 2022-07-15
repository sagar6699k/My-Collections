function spiralTraverse(r,c,mat){
    var left = 0;
    var top = 0
    var right = c-1;
    var bottom = r-1;

    var res = [];
    var count = 0;
    while (count < r*c){

        for (let i = top; i <= bottom && count < r*c; i++){
            res.push(mat[i][left])
            count++;
        }
        left++;


        for (let i = left; i <= right && count < r*c; i++){
            res.push(mat[bottom][i])
            count++;
        }
        bottom--;


        for (let i = bottom; i >= top && count < r*c; i--){
            res.push(mat[i][right])
            count++;
        }
        right--;


        for (let i = right; i >= left && count < r*c; i--){
            res.push(mat[top][i])
            count++;
        }
        top++;
       
 
    }

     console.log(res.join(" "));
    
}


function runProgram(input) {

    var arr = input.trim().split("\n");
    var T = Number(arr[0]);
    

    var line = 1;
    for (let i = 0; i < T; i++) {
        var[r,c] = arr[line].trim().split(" ").map(Number);
        line++;
        var matrix = [];
        for (let j = line; j < line+r; j++) {
            matrix.push(arr[j].trim().split(" ").map(Number));
        }
        line +=r;

        spiralTraverse(r,c,matrix)
        
    }
   
    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      3 4
      1 2 3 4
      5 6 7 8
      9 10 11 12
      4 3
      1 2 3
      4 5 6
      7 8 9
      10 11 12`);
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