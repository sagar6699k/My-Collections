//1st

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach(function(el){
//     // console.log( el*el);
// })


// All functions req for question at one place

function double(el){
    return el*2;
}

function oddCheck(el){
    if(el % 2 == 1){
        return el;
    }
}


function getProduct(ac , el){
    return ac * el;
}


function getSum(ac , el){
    return ac + el;
}


function multipleOf3(el){
    if(el%el==0){
        return true;
    }else{
        return false;
    }
}


function getCube(el){
    return el ** 3;
}


//2nd--> Double the number
var double_numb = numbers.map(double);
// console.log(double_numb);


//3rd-->extract odd number
var odd_numb = numbers.filter(oddCheck);
// var odd_numb = numbers.filter(ele=> ele%2 !==0 );
// console.log(odd_numb);


//4th-->product of all number
var product = numbers.reduce(getProduct);
// var product = numbers.reduce((ac, ele)=> ac*ele);
// console.log(product);


//5th--> sum of odd numbers
var odd_sum = numbers.filter(oddCheck).reduce(getSum);
// console.log(odd_sum);


//6th-->
var odd_cube_sum = numbers.filter(multipleOf3).map(getCube).reduce(getSum);
console.log(odd_cube_sum);