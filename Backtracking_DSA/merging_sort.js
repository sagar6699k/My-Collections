function MergingSort(arr1, arr2, len, arr) {
  let p1 = 0
  let q1 = 0

  while (p1 < len && q1 < len) {

    if (arr1[p1] <= arr2[q1]) {
      arr.push(arr1[p1])
      p1++;
    }
    else {
      arr.push(arr2[q1])
      q1++;
    }

  }

  while (p1 < len) {
    arr.push(arr1[p1])
    p1++;
  }
  while (q1 < len) {
    arr.push(arr2[q1])
    q1++;
  }


}



function runProgram(input) {

  var Input = input.trim().split("\n")
  let len = Number(Input[0].trim());
  let arr1 = Input[1].trim().split(" ").map(Number);
  let arr2 = Input[2].trim().split(" ").map(Number);

  let arr = [];

  MergingSort(arr1, arr2, len, arr)
  console.log(arr.join(" "))


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