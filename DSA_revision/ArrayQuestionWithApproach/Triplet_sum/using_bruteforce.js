// Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. If there is such a triplet present in array, then print the triplet and return true. Else return false.



function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, sum] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);

    function Find_Triplet(n, sum, arr) {
        
        for (let i = 0; i < n-2; i++) {
            for (let j = i+1; j < n-1; j++) {
                for (let k = j+1; k < n; k++) {
                    if (arr[i]+arr[j]+arr[k] === sum) {
                        
                        console.log(arr[i], arr[j], arr[k]);
                        return true;
                    }
                }
            }
        }
        return false;
    }
   
    console.log(Find_Triplet(n, sum, arr));
  
    //TC = O(n^3)
    //SC = O(1)
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`6 24
      12 3 4 1 6 9`);
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
    
  