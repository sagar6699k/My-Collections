function runProgram(input) {

    var arr = input.trim().split("\n");
    var size = Number(arr[0].trim());
    var mid = Math.floor(size / 2)

    var matrix = [];
    for (let i = 1; i <= size; i++) {
        matrix.push(arr[i].trim().split(" ").map(Number));
        
    }
    //console.log(matrix);

    var sum = 0;
    //Boundry Elements
    for (let i = 0; i < size; i++) {
        sum += matrix[0][i];
        
    }

    for (let i = 0; i < size; i++) {
        sum += matrix[size-1][i];
        
    }

    for (let i = 1; i < size-1; i++) {
        sum += matrix[i][0];
        
    }

    for (let i = 1; i < size-1; i++) {
        sum += matrix[i][size-1];
        
    }

    //Diagonal Elements
    for (let i = 1; i < size-1; i++) {
        for (let j = 1; j < size-1; j++) {
            if (i == j) {
                sum += matrix[i][j]
            }
            
        }
        
    }

    for (let i = 1; i < size-1; i++) {
        for (let j = 1; j < size-1; j++) {
            if (i+j == size-1) {
                sum += matrix[i][j]
            }
            
        }
        
    }
    
    

    if (size % 2 == 0) {
        console.log(sum);
    }else{
        console.log(sum - (matrix[mid][mid]));
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      1 2 3 4
      5 6 7 8
      9 10 11 12
      13 14 15 16`);
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