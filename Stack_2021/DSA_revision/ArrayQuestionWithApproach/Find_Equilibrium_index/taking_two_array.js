function FindEquilibriumIndex(n, arr) {
   
    //Travel form left to right and add element to prev element and push it arr1;
    let arr1 = [];
    let l_sum = 0; 
    for (let i = 0; i < n; i++) {
        l_sum += arr[i];
        arr1.push(l_sum);
    }
    console.log(arr1);
    //Travel form right to left and add one element
    let arr2 = [];
    let r_sum = 0; 
    for (let j = n-1; j >= 0; j--) {
        r_sum += arr[j];
        arr2.push(r_sum);
    }

    let arr2_rev = arr2.reverse();
    //Now check in arr1 and arr2 somewhere it find same number;
    console.log(arr2_rev);
    for (let k = 0; k < n; k++) {
        if (arr1[k] === arr2_rev[k]) {
            return k;
        }
        
    }

    return -1;

}


function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr = array[1].trim().split(" ").map(Number);

    console.log(FindEquilibriumIndex(n, arr));
    
//T.C = O(n)
//S.C = O(n)
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`5
      3 3 5 5 1`);
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
    
  
  
  