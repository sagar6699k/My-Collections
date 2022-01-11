// Description

// Given an integer n, we have n strings of length 4. Now we have to remove all those strings which is an anagram of previously appeared string.
// Print the final number of strings left and the strings after the required execution. See the sample testcase for I/O clarifications.
// Note -The final vector of strings is sorted.


function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let res = [];
    res.push(array[1].trim());

    for (let i = 2; i < array.length; i++) {
        let item_p = array[i-1].trim()
        let item_c = array[i].trim()
        let count = 0;
        for (let j = 0; j < item_c.length; j++) {
            for (let k = 0; k < item_p.length; k++) {
                if (item_c[j] === item_p[k]) {
                    count++;
                }
            }
        }
        if (count < 4) {
            res.push(item_c)
        }
        
    }
    
    let res1 = res.sort();
    console.log(res1.length);
    for (let i = 0; i < res1.length; i++) {
        console.log(res1[i]);
    }



  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      eodc
      odec
      code
      baca
      aabc`);
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