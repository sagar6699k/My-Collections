function runProgram(input) {

    var arr = input.trim().split("\n");
    var T = Number(arr[0].trim());
    var box = [];
    for (let i = 1; i <= T; i++){
        GoodBadStr(arr[i].trim().split(""));
    }
    //console.log(box);

    function GoodBadStr(str) {
        var ans = "";
       for (let i = 0; i < str.length; i++) {
           if (str[i] != str[i+1]) {
               ans += str[i];
           }
           
       }
       console.log(ans);
    }
    







}
if (process.env.USERNAME === "Sagar Kurewar") {
    runProgram(`3
      abb
      aaab
      ababa`);
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