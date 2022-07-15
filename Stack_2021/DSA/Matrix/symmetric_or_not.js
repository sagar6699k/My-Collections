function SymmetryCheck(sz,mat) {
    var count1 = 0;
    var count2 = 0;
    for (let i = 0; i < Math.floor(sz/2); i++) {
        for (let j = 0; j < sz; j++) {
            if ( (mat[i][j]) == (mat[sz-i-1][j]) ) {
                count1++;
            }
            
            if ( (mat[j][i]) == (mat[j][sz-i-1]) ) {
                count2++;
            }
            
            
        }
        
    }
    
    // console.log(count1,count2);
    if (count1 == count2) {
        console.log("YES");
    }else{
        console.log("NO");
    }
    
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
            matrix.push(arr[j].trim().split("").map(Number));
            
        }
        line +=size;
        // console.log(matrix);

        SymmetryCheck(size,matrix);
    }
   

  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      2
      11
      11
      4
      0101
      0110
      0110
      0101
      4
      1001
      0000
      0000
      1001
      5
      01110
      01010
      10001
      01010
      01110
      5
      00100
      01010
      10001
      01010
      01110`);
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