function diamondTraversing(sz,mat){
    var res = [];
    var mid = Math.floor(sz / 2);
    for (let i = mid; i >= 0; i--) {
        for (let j = sz-1; j >= mid; j--) {
            if (j-i == mid) {
                res.push(mat[i][j])
            }
        }
    }

    
    for (let i = 1; i <= mid; i++) {
        for (let j = mid-1; j >= 0; j--) {
            if (j+i == mid) {
                res.push(mat[i][j])
            }
        }
    }

    for (let i = mid+1; i <= sz-1; i++) {
        for (let j = 1; j <= mid; j++) {
            if (i-j == mid) {
                res.push(mat[i][j])
            }
        }
    }

    for (let i = sz-2; i > mid; i--) {
        for (let j = mid; j < sz-1; j++) {
            if (i+j == sz+mid-1) {  // imp step
                res.push(mat[i][j])
            }
        }
    }



    console.log(res.join(" "));
}

function runProgram(input) {

    var arr = input.trim().split("\n");
    var T = Number(arr[0]);

    var line = 1;

    for (let i = 0; i < T; i++) {
        var size = Number(arr[line]);
        line++;
        var matrix = [];
        for (let j = line; j < line+size; j++) {
            matrix.push(arr[j].trim().split(" ").map(Number));
            
        }
       line += size;
       diamondTraversing(size,matrix);
    }
   

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      5
      10 4 3 7 4
      3 3 6 5 7
      4 2 3 9 10
      5 7 6 5 8
      5 8 8 1 8`);
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