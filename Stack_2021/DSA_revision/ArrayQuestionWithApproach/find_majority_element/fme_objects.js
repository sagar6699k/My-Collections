function FindMajorityElement(arr, n) {
  let falf = Math.floor(n / 2);
  let obj = {};

  for (let i = 0; i < n; i++) {
    if (obj[arr[i]] === undefined) {
        obj[arr[i]] = 1;
    }
    else {
        obj[arr[i]] = obj[arr[i]] + 1;
    }
  }

  // console.log(obj);
  let max = 0;
  for (const key in obj) {
      max = Math.max(max, obj[key])
  }
  // console.log(max);

  for (const key in obj) {
    if ((max === obj[key]) && (max > falf) ) {
      return key;
    }
  }

  return -1;
}


function runProgram(input) {

  var array = input.trim().split("\n");
  let T = Number(array[0].trim());
  let line = 1;
 
  for (let i = 1; i <= T; i++) {
    let n = Number(array[line].trim());
    line++;
    let arr = array[line].trim().split(" ").map(Number);
    line++;
       

    console.log(FindMajorityElement(arr, n));
  }

  //TC = O(n)
  //SC = O(n)
   

}
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`5
        7
        3 1 10 9 10 4 7
        3
        2 8 8
        6
        5 10 4 9 2 2
        9
        4 10 2 8 4 7 5 4 4
        9
        7 6 6 7 6 9 8 6 9`);
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
    
  
  
  