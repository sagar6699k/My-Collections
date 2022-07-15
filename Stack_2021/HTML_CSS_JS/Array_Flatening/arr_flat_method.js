//1) let's consider we have 2d, 3d or in deep array, and we want to make 1d array from that , in such case we can use flat method.

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flaten_arr = matrix.flat(1)//means we are flatening matrix to level 1
// console.log('flaten_arr:', flaten_arr)//[ 1, 2, 3, 4, 5,..9]

//2) 
let indeep_array = [1, [2, [1, [4, [1]]]], [1], [7]];
//in such case we can make level as infinity;
let res = indeep_array.flat(Infinity);
// console.log('res:', res)//[1,2,1,4,1,1,7]

//3) use of flatmap

let nums = [1, 2, 3];
let chars = ['one', 'two', 'three'];

let mapped = nums.map((val, indx) => [val, chars[indx]]);
// console.log('mapped:', mapped)//mapped: [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ], but we want this in 1d from i.e in single array.

let res1 = mapped.flat(1);
// console.log('res1:', res1)//res1: [ 1, 'one', 2, 'two', 3, 'three' ]

//so here we can use flatmap method, which will give same output as line 19.
let flatmapped = nums.flatMap((val, indx) => [val, chars[indx]]);
console.log('flatmapped:', flatmapped)//flatmapped: [ 1, 'one', 2, 'two', 3, 'three' ]



