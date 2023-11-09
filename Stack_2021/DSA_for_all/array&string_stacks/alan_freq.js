function alanFre(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === undefined) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1
    }
  }

  return obj;
}


function runProgram(input) {

  var array = input.trim().split("\n");
  let n = Number(array[0].trim());
  let arr = array[1].trim().split("")

  let obj = alanFre(arr)

  for (const key in obj) {
    console.log(key + "-" + obj[key]);
  }




}
if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`4
      aman`);
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