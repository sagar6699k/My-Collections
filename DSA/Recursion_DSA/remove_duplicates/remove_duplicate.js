function runProgram(input) {

  var array = input.trim().split("\n");
  let n = Number(array[0].trim());
  let arr = array[1].trim().split("");

  //code is lengthy, but its simple to understand, just go through it.
  function RemoveDuplicates(arr) {

    if (arr.length === 0) {
      return "Empty String"
    }
    if (arr.length === 1) {
      return arr.join("");
    }

    let res = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        if (arr[i] !== arr[i+1]) {
          res.push(arr[i])
        }
      }
      else if (i === arr.length-1) {
        if (arr[i] !== arr[i-1]) {
          res.push(arr[i])
        }
      }
      else {
        if (arr[i] !== arr[i-1] && arr[i] !== arr[i+1]) {
          res.push(arr[i]);
        }
      }
    }

    if (res.length === arr.length) {
      return res.join("");
    }
    else {
      return RemoveDuplicates(res);
    }
    
  }
   
  console.log(RemoveDuplicates(arr));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`9
      axxxzayya`);
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
    
  