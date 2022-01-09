function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);
    let obj = {};
    for (let i = 0; i < n; i++) {
       if (obj[arr[i]] === undefined) {
           obj[arr[i]] = 1;
       } else {
           obj[arr[i]] = obj[arr[i]] + 1;
       }
       
    }

    for (const key in obj) {
        if (obj[key] === 1) {
           console.log(key);
            break;  
        }
    }
 
  //T.C = O(n)
  //1.C = O(n)



  
  }
  if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`7
    3 5 4 5 3 4 7`);
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
  


