function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    let q = Number(array[2].trim());
    let querry = array[3].trim().split(" ").map(Number);


    for (let i = 0; i < q; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (querry[i] === arr[j]) {
                count++;
            }
        }
        if (count > 0) {
            console.log("YES");
        }
        else {
            console.log("NO");
        }
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      1 2 3 4 5
      3
      3 5 7`);
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