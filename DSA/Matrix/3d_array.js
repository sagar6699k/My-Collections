function runProgram(input) {

    var arr = input.trim().split("\n");
    var dim = arr[0].trim().split(" ").map(Number);
    var L = dim[0];
    var m = dim[1];
    var n = dim[2];

    var ele = arr[1].trim().split(" ").map(Number);
    
    
    for(var i = 0; i < ele.length; i=i+n){
        var box = [];

        for(var j = i; j < i+n; j++){
            box.push(ele[j]);
        }

        console.log(box.join(" "));
    }
    
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3 2 2
      2 1 1 4 5 3 1 6 5 6 1 8 `);
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