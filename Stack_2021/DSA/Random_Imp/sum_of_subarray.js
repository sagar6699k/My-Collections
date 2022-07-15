//Q)  You are given an array of N integers and a single integer K. You need to find out if there is a subarray, which has the sum exactly as K

// First-line contains T, no of test cases.
// First-line of each test case contains N, the size of the array, and K.
// Second-lineof each test casecontains N spaced integers, elements of an array.


const SumOfSubarray = (arr, n, k) => {
    
    let sum = 0;
    let i = 0;
    let j = 0;

  //Its simple brutefoce using while loop;
    while (i < n && j < n) {
        
        sum += arr[j];

        if (sum === k) {
            return "Yes";
        }
        j++;

        if (j === n) {
            i++;
            j = i;

            sum = 0;
        }
    }
    return "No"
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let [n, k] = array[line].trim().split(" ").map(Number);
        line++;
        let arr = array[line].trim().split(" ").map(Number);
        line++;

        
        console.log(SumOfSubarray(arr, n, k));
    }
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      5 3
      1 2 1 3 4
      4 5
      1 2 1 3
      3 2
      1 2 1`);
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
    