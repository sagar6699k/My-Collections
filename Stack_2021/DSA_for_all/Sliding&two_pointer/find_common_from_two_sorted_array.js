function FindCommon(n, arr1, arr2) {

    let obj = {};
    for (let k = 0; k < n; k++) {
        if (obj[arr1[k]] === undefined) {
            obj[arr1[k]] = 1;
        }
        else {
            obj[arr1[k]] = obj[arr1[k]] + 1;
        }
    }
    
    let arr11 = Object.keys(obj).map(Number);
    console.log(arr11);

    let res = [];
    for (let i = 0; i < arr11.length; i++) {
        let count = 0;
       for (let j = 0; j < arr2.length; j++) {
           if (arr11[i] === arr2[j]) {
               count++;
        
           }
       }
       
        if (count > 0) {
            res.push(count);
        }
   }

    return res.length;

}





function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr1 = array[line].trim().split(" ").map(Number);
        line++;
        let arr2 = array[line].trim().split(" ").map(Number);
        line++;
        
        console.log(FindCommon(n, arr1, arr2));
    }
   
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`1
      6
      1 2 2 3 4 5
      4 4 3 2 1 1`);
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
    