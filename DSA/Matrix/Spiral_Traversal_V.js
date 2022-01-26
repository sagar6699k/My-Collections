function spiralTraversalV(N, arr){
    //write code here
    var left = 0;
    var top = 0;
    var bottom = N-1;
    var right = N-1;
    var res = [];
    var count = 0


    while (left <= right && top <= bottom) {
        
    
    for (let i = top; i <= bottom; i++) {
        res.push(arr[i][right]);
        count++;
    }right--;

    for (let i = right; i >= left; i--) {
        res.push(arr[bottom][i]);
        count++;
    }bottom--;

    for (let i = bottom; i >= top; i--) {
        res.push(arr[i][left]);
        count++;
    }left++;

    for (let i = left; i <= right ; i++) {
        res.push(arr[top][i]);
        count++;
    }top++;
}
    console.log(res.join(" "));
}
  




