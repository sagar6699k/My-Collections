//Description
// You are given two sorted arrays each of length N. Your task is to write a program that merges both the arrays such that the final array formed after merging is sorted.

function runProgram(input) {

    var array = input.trim().split("\n");
    let n = Number(array[0].trim());
    let arr1 = array[1].trim().split(" ").map(Number);
    let arr2 = array[2].trim().split(" ").map(Number);

   function Merge(n, arr1, arr2) {
       
       let i = 0;
       let j = 0;
       let k = 0;
       let arr = [];
       while (i < n && j < n) {
           if (arr1[i] <= arr2[j]) {
               arr[k] = arr1[i];
               i++;
           }
           else {
                arr[k] = arr2[j];
               j++;
           }
           k++;
       }

       while (i < n) {
            arr[k] = arr1[i];
           i++;
           k++;
       }

       while (j < n) {
            arr[k] = arr2[j];
           j++;
           k++;
       }

       return arr.join(" ");
   }
    
  console.log(Merge(n, arr1, arr2));
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`4
      1 5 7 9
      2 4 6 8`);
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
    
  