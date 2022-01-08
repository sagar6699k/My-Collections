function BubbleSort(n, arr) {
    
    for (let i = 0; i < n-1; i++) {
        let flag = false;
        for (let j = 0; j < n-1-i; j++) {
            
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                flag = true;
            }
            
        }

        if (flag === false) {
            return arr.join(" ");
        }
        
    }

}



function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    console.log(BubbleSort(n, arr));

    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      3 5 0 9 8`);
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
    