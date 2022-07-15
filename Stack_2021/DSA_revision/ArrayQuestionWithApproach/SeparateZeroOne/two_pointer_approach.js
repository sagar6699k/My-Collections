function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    const SeparateZeroOne = (arr, n) => {
        let l = 0;
        let r = n - 1;

        while (l < r) {
            
            while (arr[l] === 0 && l<r) {
                l++;
            }
            while (arr[r] === 1 && l<r) {
                r--;
            }

            //Swaping
            if (l < r) {
                let temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l++;
                r--;

            }

        }
    }
    SeparateZeroOne(arr, n);
    console.log(arr);
   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`8
      0 0 1 0 1 1 1 0`);
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
  