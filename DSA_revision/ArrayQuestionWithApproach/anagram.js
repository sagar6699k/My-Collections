function CheckAnagram(n, arr1, arr2) {
    let obj = {};
    for (let i = 0; i < n; i++) {
   
        if (obj[arr1[i]] === undefined) {
            obj[arr1[i]] = 1;
        }
        else {
            obj[arr1[i]] = obj[arr1[i]] + 1;
        }
    }

    for (let j = 0; j < n; j++) {
   
        if (obj[arr2[j]] === undefined) {
            obj[arr2[j]] = 1;
        }
        else {
            obj[arr2[j]] = obj[arr2[j]] - 1;
        }
    }

    let count = 0;
    for (const key in obj) {
        if (obj[key] !== 0) {
            count++;
        }
    }

    if (count > 0) {
        return "No"
    }
    else {
        return "Yes"
    }
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;
    for (let i = 1; i <= T; i++) {
        let n = Number(array[line].trim());
        line++;
        let arr1 = array[line].trim().split("");
        line++;
        let arr2 = array[line].trim().split("");
        line++;
        
        console.log(CheckAnagram(n, arr1, arr2));
    }
   
    //TC = O(n);
    //SC = O(n);

    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`2
      2
      ab
      ac
      3
      aba
      aab`);
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
    
  