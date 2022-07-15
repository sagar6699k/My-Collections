var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

function getOddLength(el){
    if(el.length % 2 == 1){
        return el.length;
    }
}

function getSum(ac,el){
    return ac + el.length;
}

var odd_length_sum = arr.filter(getOddLength).reduce(getSum,0);
console.log(odd_length_sum);

// var a = arr.filter(getOddLength);
// console.log(a);