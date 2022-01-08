function runProgram(input) {

    var arr = input.trim().split("\n");
    let ele = arr[1].trim().split(" ").map(Number);
    
    let obj = {};
    for (let i = 0; i < ele.length; i++) {

        if (obj[ele[i]] == null) {
          obj[ele[i]] = 1;
        }else{
          obj[ele[i]] = obj[ele[i]] + 1;
        }
      
    }

    let box = Object.keys(obj).map(Number);

    let box1 = box.sort();
  
    if (box1.length < 3) {
      console.log("Not Possible");
      console.log("Not Possible");
    }else{

      console.log(box1[0],box1[1],box1[2]);
      console.log(box1[box1.length-3],box1[box1.length-2],box1[box1.length-1]);
    }

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`8
      1 2 3 4 2 1 6 5`);
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