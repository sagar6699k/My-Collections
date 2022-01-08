// You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)

// Input Format
// First line contains N and K
// Second line contains N space separated sorted integers

function FirstOccurence_of_Upper(arr, k, lo, hi) {

  let ans = -1
  while (lo <= hi) {
    let mid = (lo + Math.floor((hi - lo) / 2))

    if (arr[mid] <= k) {
      lo = mid + 1
    }
    else{
      ans = mid 
      hi = mid - 1;
    }

  }
  return ans;

}



function runProgram(input) {

  var array = input.trim().split("\n");
  let [len, k] = array[0].trim().split(" ").map(Number);
  let arr = array[1].trim().split(" ").map(Number);

  let lo = 0;
  let hi = len - 1;
 
  console.log(FirstOccurence_of_Upper(arr, k, lo, hi));;
 
}
if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`10 3
      0 2 4 4 5 5 7 7 9 10`);
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