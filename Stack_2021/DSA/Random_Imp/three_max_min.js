// Description

// Given an array of N integers, print the 3 distinct maximum and 3 distinct minimum elements of the array.

// Input
// Input Format
// First line contains N
// Second line contains N space separated integers which are elements of the array.
// Constraints
// 0<=N<=100 (Please note that N can be 0 as well)
// The values present in the array can be negative as well.

// Output
// In the first line, print the least 3 values (sorted) present in the array.
// In the second line, print the top 3 values (sorted) present in the array.
// In case there are not 3 min value, print "Not Possible" (without quotes).
// In case there are not 3 max value, print "Not Possible" (without quotes).
// So, according to the above statements, if both are not possible, you have to print "Not Possible" twice (once for each)

// In the array, if you found out only 2 distinct min and 2 distinct max elements then also printNot Possibletwice [ one for minimum and other for maximum]





function runProgram(input) {

    var arr = input.trim().split("\n");
    let ele = arr[1].trim().split(" ").map(Number);
    
    let obj = {};
    for (let i = 0; i < ele.length; i++) {

        if (obj[ele[i]] == null) {
          obj[ele[i]] = 1;
        }else{
          obj[ele[i]] = obj[ele[i]] + 1;
        }
      
    }

    let box = Object.keys(obj).map(Number);

    let box1 = box.sort();
  
    if (box1.length < 3) {
      console.log("Not Possible");
      console.log("Not Possible");
    }else{

      console.log(box1[0],box1[1],box1[2]);
      console.log(box1[box1.length-3],box1[box1.length-2],box1[box1.length-1]);
    }

   
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`8
      1 2 3 4 2 1 6 5`);
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