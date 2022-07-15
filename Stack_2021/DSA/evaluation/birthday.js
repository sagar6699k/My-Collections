function birthdayShopping(arr , new_arr, current, k) {

    if (new_arr.length === k) {
        console.log(new_arr);
    }

    if (current === arr.length) return;

    for (let i = current; i < arr.length; i++) {
        new_arr.push(arr[i]);

        birthdayShopping(arr , new_arr, current+1, k)

        new_arr.pop()
        
    }
    
}


function runProgram(input) {

    var [n,k] = input.trim().split(" ").map(Number)
    
    let arr = [];
    for (let i = 1; i <= n; i++) {
       arr.push(i)
    }
    // console.log(arr)

    let new_arr = [];
    let current = 0

    birthdayShopping(arr , new_arr, current, k)
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4 2`);
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