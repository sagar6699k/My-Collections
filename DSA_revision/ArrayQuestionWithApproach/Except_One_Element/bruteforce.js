// Description

// Given an array A of n elements, every element appears twice in the array except for one element. Find the element that is uniquely present in the array.
// In other words, there is one value that has a frequency of 1 whereas the rest has a frequency of 2. Find that particular element.
// Added Constraint -> Do in O(1) auxiliary space and linear time complexity.
//input                 output
// 2[testCase]             5
// 1[n]                    3
// 5[arr]
// 5[n]
// 1 2 1 3 2[arr]


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
      let n = Number(array[line].trim());
      line++;
      let arr = array[line].trim().split(" ").map(Number);
      line++;
      
      console.log(Find_unique(n, arr));
    }
    
    function Find_unique(n, arr) {
      
      for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count === 1) {
            // console.log(arr[i]);
            return arr[i];
        }
      }
    }

    
 
  //T.C = O(n^2)
  //S.C = O(1)



  
  }
  if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      1
      5
      5
      1 2 1 3 2`);
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
  


