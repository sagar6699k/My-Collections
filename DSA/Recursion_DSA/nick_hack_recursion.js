function nickHack(num , b ) {
    if (num === b) {
        return true;
    }

    if (num < b) {
        return false;
    }

    return nickHack(num, b*10) || nickHack(num, b*20)
}



function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim());
    
    let line = 1;
    let b = 1

    for (let i = 1; i <= T; i++) {
        let num = Number(arr[line].trim());
        line++;

        if (nickHack(num , b ) === true) {
            console.log("Yes");
        }else if (nickHack(num , b ) === false) {
            console.log("No");
        }

    }

    
   

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      1
      2
      10
      25
      200`);
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