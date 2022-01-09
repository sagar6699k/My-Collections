function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

   
    function LargestAreaRectangle(n, arr) {
        
        let area = 0;
        for (let i = 1; i < n-1; i++) {
            let l = 0;
            let r = 0;

            //finding left sided min hight
            for (let j = i-1; j >=0; j--) {
                if (arr[j] < arr[i]) {
                    l = j;
                    break;
                }
            }
            //finding right sided min hight
            for (let k = i+1; k < n; k++) {
                if (arr[k] < arr[i]) {
                    r = k;
                    break;
                }
            }

            let width = r - l - 1;
            let curr_area = width * arr[i];

            if (area < curr_area) {
                area = curr_area;
            }
        }
        return area;
    }
    
    console.log(LargestAreaRectangle(n, arr));
  
    //TC = O(n^2)
    //SC = O(1)
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`7
      6 2 5 4 5 1 6`);
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
    
  