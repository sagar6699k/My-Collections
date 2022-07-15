// Given an array and a value, find if there is a triplet in array whose sum is equal to the given value. If there is such a triplet present in array, then print the triplet and return true. Else return false.



function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, sum] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number).sort((a,b) =>a-b);

    function Find_Triplet(n, sum, arr) {
        
        for (let i = 0; i < n-2; i++) {
            let l = i + 1;
            let r = n - 1;

            while (l < r) {
                if (arr[i] + arr[l] + arr[r] === sum) {
                    console.log(arr[i], arr[l], arr[r]);
                    return true;
                }
                else if (arr[i] + arr[l] + arr[r] < sum) {
                    l++;
                }
                else {
                    r--;
                }
            }
        }
        return false;
    }
   
    console.log(Find_Triplet(n, sum, arr));
  
    //TC = O(n^2)
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
    
  