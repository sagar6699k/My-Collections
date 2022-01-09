function runProgram(input) {

  var arr = input.trim().split(" ").map(Number);


  var len = arr.length;
  var sum = 0;
  var i = 0;
  var j = i;

  while (i < len && j < len) {

    sum = sum + arr[j];

    if (sum == 0) {
      console.log(i, j);
    }
    j++

    if (j == len) {
      i++;
      j=i;
      sum = 0;

    } 
   

  }



}
if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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