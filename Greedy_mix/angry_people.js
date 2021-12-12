function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number).sort((a, b) => a - b);
    let arr_e = [];
    let arr_o = [];

    for (let i = 0; i < arr.length; i++) {
        if (i%2 === 0) {
            arr_e.push(arr[i])
        }
        else {
            arr_o.push(arr[i])
        }
        
    }

    let max = 0;
    for (let j = 0; j < arr_e.length-1; j++) {
        let diff = arr_e[j + 1] - arr_e[j];
        max = Math.max(diff, max)
        
    }

    for (let j = 0; j < arr_o.length-1; j++) {
        let diff1 = arr_o[j + 1] - arr_o[j];
        max = Math.max(diff1, max)
        
    }
  
    console.log(max);



  
  }
  if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`4
    5 10 6 8`);
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
  