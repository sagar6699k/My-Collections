let test = ['t', 's', 'e', 'b'];

let best = test.reduce((acc, val) => acc + val);
// console.log(best);//tseb

//so bydefault reduce mathod iterate from left to right 
//if we want to iterate from right to left, then we can use reduceRight method
let best1 = test.reduceRight((acc, val) => acc + val);
console.log('best1:', best1)//best
