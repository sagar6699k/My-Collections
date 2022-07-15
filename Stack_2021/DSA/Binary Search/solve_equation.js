// Given the constants of quadratic equation F(x) = Ax2 + Bx + C as A, B, and C and an integer K, the task is to find the smallest value of root x such that F(x) ≥ K and x > 0. If no such values exist then print “-1”. It is given that F(x) is a monotonically increasing function.


// Input: A = 3, B = 4, C = 5, K = 6
// Output: 1
// Explanation:
// For the given values F(x) = 3x2 + 4x + 5 the minimum value of x is 1, F(x) = 12, which is greater than the given value of K.

// Input: A = 3, B = 4, C = 5, K = 150
// Output: 7
// Explanation: 
// For the given values F(x) = 3x2 + 4x + 5 the minimum value of x is 7, F(x) = 180, which is greater than the given value of K.


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
