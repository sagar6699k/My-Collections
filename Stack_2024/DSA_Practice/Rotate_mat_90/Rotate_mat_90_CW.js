function rotateBy90CW(n, mat) {
    let cycle = Math.floor(n / 2)
    for (let i = 0; i < cycle; i++) {
        for (let j = i; j < n - i - 1; j++) {
            let temp = mat[i][j];

            mat[i][j] = mat[n - 1 - j][i];

            mat[n - 1 - j][i] = mat[n - 1][n - 1 - j]

            mat[n - 1][n - 1 - j] = mat[j][n - 1 - i]

            mat[j][n - 1 - i] = temp;
        }

    }
    
    console.log(n);
    for (let i = 0; i < n; i++) {
        console.log(mat[i].join(" "));
    }
}


function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim());
    let line = 1;
    for (let i = 0; i < T; i++) {
        let n = Number(arr[line].trim());
        line++;
        let mat = [];
        for (let j = line; j < n + line; j++) {
            mat.push(arr[j].trim().split(" ").map(Number));
        }
        line += n

        rotateBy90CW(n, mat)

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