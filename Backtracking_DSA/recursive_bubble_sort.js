function RecursiveBubbleSort(arr, len) {
  if (len == 1) {
    return arr;
  }

  for (var i = 0; i < len - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  return RecursiveBubbleSort(arr, len - 1);
}

function runProgram(input) {
  Input = input.trim().split("\n");

  let len = Number(Input[0]);
  let arr = Input[1].trim().split(" ").map(Number);

  console.log(RecursiveBubbleSort(arr, len).join(" "));
}
if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`5
      3 5 0 9 8`);
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
