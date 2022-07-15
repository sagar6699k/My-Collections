// Description

// You are given a ciphered string, you have to decipher the string.
// For example, if the given string is "a2b1c2", then the deciphered string will be "aabcc".
// Note: The string contains only lower-case letters and numbers.

// Input
// The first line of the input contains T, the number of test cases.
// The first line of each test case contains N, the length of the string.
// The next line contains the string, for which the decipher string is to be generated.



function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split("");
        line++;

        console.log(Decipher_String(n, arr));
    }
   
    function Decipher_String(n, arr) {
        var res = "";
        for(var i = 0; i < n; i=i+2){
            for(var j = 0; j< arr[i+1]; j++){
                res = res + arr[i];
            }
        }
  
        return res;
    }
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      6
      a2b1c2
      6
      a2z1a2`);
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
    