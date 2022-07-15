function runProgram(input) {

    var arr = input.trim().split("\n");

    var[r1,c1] = arr[0].trim().split(" ").map(Number);
    var mat1 = [];

    for (let i = 1; i <= r1 ; i++) {
        mat1.push(arr[i].trim().split(" ").map(Number));
    }
   
    var[r2,c2] = arr[r1+1].trim().split(" ").map(Number);
    var mat2 = [];
    // console.log(r2,c2);

    for (let i = r1+2; i < arr.length; i++) {
        mat2.push(arr[i].trim().split(" ").map(Number));
    }
    // console.log(mat2);

    var sum1 = 0;
    for (let i = 0; i < r1; i++){

        for (let j = 0; j < c1; j++){
            sum1 += mat1[i][j]
        }
    }
    
    var sum2 = 0;
    for (let i = 0; i < r2; i++){

        for (let j = 0; j < c2; j++){
            sum2 += mat2[i][j]
        }
    }
    
    
    if(sum1 > sum2){
        console.log(sum1);
    }else if(sum2 > sum1){
        console.log(sum2);
    }
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1 1
      21
      1 1
      23`);
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