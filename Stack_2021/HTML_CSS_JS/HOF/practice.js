var int = [1,2,3,4,5,6];

// function getEven(el){
//     if(el%2 == 0){
//         return el;
//     };
// }

// var res = N.filter(getDouble);
// var res = int.filter(getEven);
// var res = int.filter((ele)=>(ele%2==0));
// console.log(res);



//way of writting forEach function

//1)

// int.forEach(function(el){

//     console.log(el*2);
// })

//2)

// function getDbl(el){
//    console.log(el*2);
// }

// int.forEach(getDbl);


// //using map hof

// function getDouble(el){
//         return el*2;
//     }

// var res = int.map(getDouble);    
// console.log(res);


//using reduce hof;

// function getSum(ac,el){
//     return ac + el;
// }

// var res = int.reduce(getSum,10);
// console.log(res);