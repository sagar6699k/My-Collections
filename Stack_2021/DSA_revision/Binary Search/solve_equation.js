function SolveEquation(lo, hi, a, b, c, k) {
    let first = -1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        let value = a*(mid ** 2) + b*mid + c;

        if (value >= k) {
            first = mid;
            hi = mid;
        }
        else {
            lo = mid+1
        }

    }
    return first;
}

function runProgram(input) {
    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
    let line = 1;

    for (let i = line; i <= T; i++) {
        var [a, b, c, k] = array[line].trim().split(" ").map(Number);

        let lo = -1;
        let hi = k;

        console.log(SolveEquation(lo, hi, a, b, c, k));
    }
}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`1
    3 2 4 15`);
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
