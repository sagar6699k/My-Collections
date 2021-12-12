let count = 0;
function Sudoku(arr, r, c) {

    if (c > 8) {
        if (r === 8) {
               for (let x = 0; x < arr.length; x++) {
                   console.log(arr[x].join(" "));

               }
       

            return;
        }
        r++;
        c = 0;
    }

    if (arr[r][c] !== 0) {
        Sudoku(arr, r, c + 1)
    }

    else {
        for (let i = 1; i <= 9; i++) {
            if (CheckCol(arr, r, c, i) && CheckRow(arr, r, c, i) && CheckTiles(arr, r, c, i)) {

                arr[r][c] = i
                Sudoku(arr, r, c + 1)
                arr[r][c] = 0;
            }

        }
    }
}




function CheckCol(arr, r, c, ans) {
    for (let i = 0; i <= 8; i++) {
        if (arr[i][c] === ans) {
            return false;
        }

    }
    return true;
}
function CheckRow(arr, r, c, ans) {
    for (let i = 0; i <= 8; i++) {
        if (arr[r][i] === ans) {
            return false;
        }

    }
    return true;
}
function CheckTiles(arr, r, c, ans) {
    let start_r = r - (r % 3);
    let start_c = c - (c % 3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr[start_r + i][start_c + j] === ans) {
                return false;
            }
        }

    }
    return true;
}

function runProgram(input) {

    var Input = input.trim().split("\n")
    var arr = [];

    for (let i = 0; i < Input.length; i++) {
        arr.push(Input[i].trim().split(" ").map(Number))
    }
    Sudoku(arr, 0, 0)




}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`
      0 4 0 0 0 0 1 7 9
      0 0 2 0 0 8 0 5 4 
      0 0 6 0 0 5 0 0 8 
      0 8 0 0 7 0 9 1 0 
      0 5 0 0 9 0 0 3 0 
      0 1 9 0 6 0 0 4 0 
      3 0 0 4 0 0 7 0 0 
      5 7 0 1 0 0 2 0 0 
      9 2 8 0 0 0 0 6 0`);
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