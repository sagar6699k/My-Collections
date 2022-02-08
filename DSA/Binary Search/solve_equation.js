function SolveEquation(lo, hi, a, b, c, k) {
    let res = undefined;
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        let value = (a*(mid ** 2)) + (b*mid) + c;

        if (value >= k) {
            res = mid;
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }

    }
    return res;
}

function runProgram(input) {
    var array = input.trim().split("\n");
    let T = Number(array[0].trim());
   

    for (let i = 1; i <= T; i++) {
        var [a, b, c, k] = array[i].trim().split(" ").map(Number);
        
        let lo = 0;
        let hi = k;

        // console.log(SolveEquation(lo, hi, a, b, c, k));
        let res = SolveEquation(lo, hi, a, b, c, k);
        console.log(res);
        if (res) {
            console.log(res);
        }
        else {
            console.log(-1);
        }
    }
}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`2
    3 4 5 6
    2 7 6 3`);
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
