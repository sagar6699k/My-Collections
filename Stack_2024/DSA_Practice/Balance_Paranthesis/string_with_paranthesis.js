function runProgram(input) {

    var arr = input.trim().split("");

    function checkBalance(arr) {
        const stack = [];
        const store = ["(", ")", "[", "]", "{", "}"];
        for (let i = 0; i < arr.length; i++) {
            let t = stack.length - 1;
            if (
                (stack[t] === "(" && arr[i] === ")") ||
                (stack[t] === "[" && arr[i] === "]") ||
                (stack[t] === "{" && arr[i] === "}")
            ) {
                stack.pop();
            }
            else {
                if (store.includes(arr[i])) {
                    stack.push(arr[i])
                }
            }

        }

        if (stack.length === 0) {
            console.log("Balanced");
        } else {
            console.log("Not Balanced");
        }
    }

    //invoke function
    checkBalance(arr)
 


}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
