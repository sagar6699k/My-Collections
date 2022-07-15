function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

   
    function LargestAreaRectangle(n, arr) {
        //first find arr consisting of left min of given inex
        let stack1 = [0];
        let left = [-1];
        for (let i = 1; i < n; i++) {
            
            while (stack1.length!== 0 && stack1[stack1.length-1] > arr[i]) {
                stack1.pop();
            }
            if (stack1.length === 0) {
                left.push(-1);
            }
            else if (stack1[stack1.length-1] <= arr[i]) {
                left.push(stack1[stack1.length - 1]);
            }
            
            stack1.push(arr[i]);
        }

        
        //first find arr consisting of right min of given inex
        let stack2 = [];
        stack2.push(arr.length-1)
        let right = new Array(n).fill(0)
        right[n - 1] = arr.length;
        for (let j = n-2; j>= 0; j--) {
            
            while (stack2.length!== 0 && arr[stack2[stack2.length-1]] > arr[j]) {
                stack2.pop();
            }
            if (stack2.length === 0) {
                right[j] = arr.length;
            }
            else {
                right[j] = stack2[stack2.length - 1];
            }
            
            stack2.push(j);
        }

        return right;
        //then find area for given index and from that max area
       
    }
    
    console.log(LargestAreaRectangle(n, arr));
  
    //TC = O(n)
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
    
  