function arrangePalindrome(array) {
    var obj = {};
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]] == null) {
            obj[array[i]] = 1;
        }else{
            obj[array[i]] = obj[array[i]] + 1;
        }
        
    }

   
    var box = Object.values(obj)

    var count = 0;
    for (let i = 0; i< box.length; i++) {
      if (box[i]%2 != 0) {
          count++;
      }
       
    }
    if (count >= 2) {
        console.log("No");
    }else{
        console.log("Yes");
    }
   
}



function runProgram(input) {

    var arr = input.trim().split("\n");
    var T = Number(arr[0].trim());

    var line = 1;
    for (let i = line; i <= T; i++) {
        var size = Number(arr[line].trim());
        line++;
        var chars = arr[line].trim().split("");
        line++;
        

        arrangePalindrome(chars);
    }
    
   
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`3
      1
      a
      3
      aab
      4
      abbb`);
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