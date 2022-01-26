function Detective_L(r, c, mat) {
    
    let res = [];
    let left = 0;
    let top = 0;
    let right = c-1;
    let bottom = r-1;

    
    while (left < right || bottom > top) {
        for (let i = top; i <= bottom; i++) {
            res.push(mat[i][left]);
        }
        left++;
    
        for (let i = left; i <= right; i++) {
            res.push(mat[bottom][i]);
        }
        bottom--;
    }
    for (let i = left; i <= right; i++) {
        res.push(mat[top][i]);
    }

    return res.join(" ")

}




function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let matrix = [];
        let [r, c] = array[line].trim().split(" ").map(Number);
        line++;
        for (let j = line; j < line+r; j++) {
            matrix.push(array[j].trim().split(" ").map(Number));
        }
        line = line + r;

        console.log(Detective_L(r, c, matrix));
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      3 3
      1 2 3
      4 5 6
      7 8 9
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
    