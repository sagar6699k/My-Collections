function DiscoverNumber(arr, k, lo, hi) {

  while (lo <= hi) {
    let mid = Math.floor(lo + Math.floor((hi - lo) / 2))

    if (arr[mid] === k) {
      return "YES";
    }
    else if (arr[mid] < k) {
      lo = mid + 1;
    }
    else {
      hi = mid - 1;
    }
  }

  return "NO";
}



function runProgram(input) {

  var array = input.trim().split("\n")
  let [len, q] = array[0].trim().split(" ").map(Number);
  let arr1 = array[1].trim().split(" ").map(Number);
  let arr = arr1.sort((a, b) => a-b)


  let lo = 0;
  let hi = len - 1;

  let line = 2;
  for (let i = line; i <= q + 1; i++) {
    let k = Number(array[line].trim())
    line++;

   
    console.log(DiscoverNumber(arr, k, lo, hi));
  }



}
if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`5 10
        50 40 30 20 10
        10
        20
        30
        40
        50
        60
        70
        80
        90
        100`);
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