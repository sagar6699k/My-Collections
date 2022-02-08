// Description

// You are given a square matrix of size N x N.
// You have to print the spiral traversal of the matrix.


function spiralTraversalV(N, matrix) {
    //write code here
    var left = 0;
    var top = 0;
    var bottom = N-1;
    var right = N-1;
    var res = [];
   


    while (left <= right && top <= bottom) {
        
    
    for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][right]);
      
    }right--;

    for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
       
    }bottom--;

    for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
       
    }left++;

    for (let i = left; i <= right ; i++) {
        res.push(matrix[top][i]);
        
    }top++;
}
    console.log(res.join(" "));
}
  




