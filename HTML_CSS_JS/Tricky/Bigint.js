const max = Number.MAX_SAFE_INTEGER;
const min = Number.MIN_SAFE_INTEGER;
// console.log('max:', max)//9007199254740991 , length = 16;

//but
// console.log(max+2);//9007199254740991
// console.log(max + 4);//9007199254740991 , i.e ans not change


//here BigInt comes into picture

let Big1 = 1n;
// console.log(Big1 + 1); //TypeError: Cannot mix BigInt and other types,
console.log(Big1 + 2n); //3n
console.log(Big1 + 4n); //5n

let Big2 = BigInt(2);
console.log(Big2);//2n