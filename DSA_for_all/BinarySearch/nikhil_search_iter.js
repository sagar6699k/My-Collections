function LinearSearch_with_Nikhil(arr,a, b, n) {
    let count = 0
        if (a === 0) { //Number greater than eq to b
            for (let i = 0; i < n; i++) {
                if (arr[i] >= b) {
                    count++;
                }
            }
           
        }
        else if (a === 1) { //Number greater than b
            for (let i = 0; i < n; i++) {
                if (arr[i] > b) {
                    count++;
                }
            }
        }
    return count;
    }

   




function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    let q = Number(array[2].trim());

    let line = 3;
    for (let i = line; i < array.length; i++) {
        var [a, b] = array[line].trim().split(" ").map(Number);
        line++;
        
        console.log(LinearSearch_with_Nikhil(arr,a, b, n))
    }
    
   
    
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      1 2 3 4
      3
      0 5
      1 3
      0 3`);
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