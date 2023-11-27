//Write program to calculate pow(x, n)
function powerOfX(x, n) {
    if (n === 0) {
        return 1;
    }

    return x*powerOfX(x, n-1)
}

console.log(powerOfX(25,3));