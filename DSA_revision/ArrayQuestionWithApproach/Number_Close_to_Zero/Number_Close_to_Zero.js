function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    function Number_Close_to_Zero(n, arr) {
        let closest = arr[0];
        for (let i = 0; i < n; i++) {
            if (arr[i] > 0 && arr[i]<= Math.abs(closest)) {
                closest = arr[i];
            }
            else if (arr[i] < 0 && Math.abs(arr[i]) < Math.abs(closest)) {
                closest = arr[i];
            }
        }
        return closest;
    }
   
    console.log(Number_Close_to_Zero(n, arr));
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`6
      5 6 7 9 2 -2`);
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
    
  