//Description

// You are given a string S. Find if the string, can be converted into a palindrome.
// You are free to rearrange the string in any way you want. Rearrangement refers to the fact that the characters can be arranged in any way in the string.
// Deletion or addition of characters is not allowed.


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr = array[line].trim().split("");
        line++;
        
       
        console.log(DetectPalindrome(n, arr));
    }

    function DetectPalindrome(n, arr) {
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

        let count = 0;
        for (let key in obj) {
            if (obj[key]%2 !== 0) {
                count++;
            }
        }

        if (count>=2) {
            return "Not Possible!"
        }
        else {
            return "Possible!"
        }
    }
   
    
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      6
      aabbcc
      5
      aabcd`);
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
    
  