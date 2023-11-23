function RotateBy90(size, mat) {

  let ring = Math.floor(size / 2);

  for (let i = 0; i < ring; i++) {
    for (let j = i; j < size-i-1; j++) {
      let temp = mat[i][j];

      mat[i][j] = mat[size - j - 1][i];
      mat[size - j - 1][i] = mat[size - j - 1][size - i - 1];
      mat[size - j - 1][size - i - 1] = mat[j][size - i - 1]
      mat[j][size - i - 1] = temp;
      
    }
    
  }

  for (let i = 0; i < size; i++) {

    console.log(mat[i].join(" "));

  }

}


function runProgram(input) {

  var arr = input.trim().split("\n");
  let T = Number(arr[0].trim());
  let line = 1;

  for (let i = 1; i <= T; i++) {
    let matrix = [];
    let size = Number(arr[line].trim());
    line++;
    for (let j = line; j < line+size; j++) {
      matrix.push(arr[j].trim().split(" ").map(Number));
    }
    line = line + size;

    RotateBy90(size, matrix)
  }
  
}




if (process.env.USERNAME === "Sagar Kurewar") {
  runProgram(`2
      4
      1 2 3 4
      5 6 7 8
      1 2 3 4
      5 6 7 8
      3
      1 2 3
      4 5 6
      7 8 9`);
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