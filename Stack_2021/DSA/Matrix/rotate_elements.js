function RotateElementCW(N,mat){
    var top = 0
    var left = 0
    var right = N-1;
    var bottom = N-1;
    var ring = Math.floor(N/2);

    for (let i = 0; i < ring ; i++) {
        var prev = mat[top+1][left];
        for (let j = left; j <= right; j++) {
            var temp = mat[top][j];
            mat[top][j] = prev;
            prev = temp;
            
        }top++;

        for (let j = top; j <= bottom; j++) {
            var temp = mat[j][right];
            mat[j][right] = prev;
            prev = temp;
            
        }right--;

        for (let j = right; j >= left; j--) {
            var temp = mat[bottom][j];
            mat[bottom][j] = prev;
            prev = temp;
            
        }bottom--;

        for (let j = bottom; j >= top ; j--) {
            var temp = mat[j][left];
            mat[j][left] = prev;
            prev = temp;
            
        }left++;
        
    }

    

    for (let i = 0; i < N; i++) {
        console.log(mat[i].join(" "));
        
    }
}



function runProgram(input) {

    var arr = input.trim().split("\n");
    var n = Number(arr[0].trim());
    var matrix = [];
    for (let i = 1; i <= n; i++) {
        matrix.push(arr[i].trim().split(" ").map(Number));

    }
    RotateElementCW(n,matrix);

}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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