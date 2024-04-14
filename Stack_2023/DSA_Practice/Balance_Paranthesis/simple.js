function balanceParanthesis(arr) {
    const stack = [];
    for (let i = 0; i < arr.length; i++) {
        let top = stack.length - 1;
        if (
            (stack[top] === "(" && arr[i] === ")") ||
            (stack[top] === "[" && arr[i] === "]") ||
            (stack[top] === "{" && arr[i] === "}")
        ) {
            stack.pop();
            
        } else {
            stack.push(arr[i])
        }
    }

    if (stack.length === 0) {
        console.log("Balanced");
    } else {
        console.log("Not Balanced");
    }
}
// Time Complexity: O(n)
// Space Complexity: O(n)



function runProgram(input) {

    var arr = input.trim().split("\n");
    let T = Number(arr[0].trim());

    let line = 1;
    for (let i = 1; i <= T; i++) {
        let array = arr[line].trim().split("");
        line++;

        balanceParanthesis(array)
    }

}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`3
      {([])}
      ([]
      [()]{}{[()()]()}
      `);
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