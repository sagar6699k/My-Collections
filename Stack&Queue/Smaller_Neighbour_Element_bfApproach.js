function runProgram(input) {

    let arr = input.trim().split("\n");
    let T = Number(arr[0]);
    let ele = arr[1].trim().split(" ").map(Number);
    // console.log('ele:', ele)

    let box = [-1];
    for (let i = 1; i < ele.length; i++) {
        for (let j = i-1; j >= 0; j--) {

           if (ele[j] < ele[i]) {
               box.push(ele[j]);
               break;
           }
        }

        if (box[i] == null) {
            box.push(-1);
        }
        
    }
    console.log(box.join(" "));

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`8
      39 27 11 4 24 32 32 1`);
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