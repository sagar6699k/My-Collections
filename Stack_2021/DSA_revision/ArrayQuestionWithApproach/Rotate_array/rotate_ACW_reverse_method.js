function Rotate_ACW(arr, n, k){
    if (k === n) {
        return arr;
    }
    else {
        
        Reverse(arr, 0, k - 1);
        Reverse(arr, k, n - 1);
        Reverse(arr, 0, n-1);

        return arr;
    }
}

function Reverse(arr, l, r) {
    while (l<r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;
    }
    return arr;
}


function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, k] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);

    console.log(Rotate_ACW(arr, n, k));
   
  //TC = O(n);
  //SC = O(1);
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
        runProgram(`7 3
      8 9 10 7 1 4 3`);
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
    
  
  
  