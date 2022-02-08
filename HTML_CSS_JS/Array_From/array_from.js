//1)Making array from string.

let str = "welcome";

let arr = [...str]

let arr_from_str = Array.from(str);  //both will give same output.
// console.log('arr:',arr);
// console.log('arr_from_str:', arr_from_str)

//2)Making array from scratch.

let arr_from_scratch = Array.from({ length: 5 }, (val, index) => index);
// console.log('arr_from_scratch:', arr_from_scratch)//[ 0, 1, 2, 3, 4 ]

let arr1 = new Array(5).fill(0);
// console.log('arr1:', arr1)//arr1: [ 0, 0, 0, 0, 0 ]

let arr2 = new Array(5).fill(0).map((val,indx)=> indx);
// console.log('arr2:', arr2)//arr2: [ 0, 1, 2, 3, 4 ]

//3) To find out unique elements from array.
let elements = [1, 1, 2, 3, 2, 4, 5, 3];

let unique_element = Array.from(new Set(elements));
// console.log('unique_element:', unique_element)//unique_element: [ 1, 2, 3, 4, 5 ]

//also by using spread operator.
let unq_spread = [...new Set(elements)];// same output.
// console.log('unq_spread:', unq_spread)//unq_spread: [ 1, 2, 3, 4, 5 ]

//4) in the function arguments.

function foo() {
    console.log(arguments);
}

// foo('w', 'e', 'l', 'c', 'o', 'm', 'e');// it will object {'0':'w', '1':'e', ...}

function foo1() {
    console.log(Array.from(arguments).join(""));
}

foo1('w', 'e', 'l', 'c', 'o', 'm', 'e')//welcome