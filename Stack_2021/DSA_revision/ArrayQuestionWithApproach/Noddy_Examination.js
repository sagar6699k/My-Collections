// Description

// Noddy has an exam in which each question has a difficulty level in the form of an Integer. Now, Noddy can only solve the problems that have difficulty level less than or equal to X. Now the rules are-
// The score of the student is equal to the maximum number of answers he/she has attempted without skipping a question.
// The student is allowed to skip just "one" question that will not be counted in the continuity of the questions.
// Note- Assume the student knows the solution to the problem he/she attempts and always starts the paper from the first question.
// Given the number of Questions, N, the maximum difficulty level of the problem Noddy can solve, X, and the difficulty level of each question in the form of an array
// Determine the maximum score that Noddy can score?

// Input
// First Line contains Integer N, the number of questions and the maximum difficulty X Noddy can solve.
// Next line contains N integers, denoting the difficulty level of each question.



function runProgram(input) {

    var array = input.trim().split("\n");
    let [n, k] = array[0].trim().split(" ").map(Number);
    let arr = array[1].trim().split(" ").map(Number);
    
    function Nody_Examination(n, arr) {
        let count = 0;
        let count1 = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] <= k) {
                count++;
            }
            else {
                count1++;
            }
            
            if (count1 > 1) {
                return count;
            }
        }
      return count;
    }

    console.log(Nody_Examination(n, arr));
    
  
  
  
    
    }
    if (process.env.USERNAME === "Sagar Kurewar") {
      runProgram(`8 4
      3 3 3 3 3 3 3 3
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
    
  