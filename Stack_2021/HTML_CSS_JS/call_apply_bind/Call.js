//1)1st ways

// let object1 = {
//     first_name : "Sagar",
//     last_name : "Kurewar",
//     printfullname : function () {
//         console.log(this.first_name +" "+this.last_name);
//     }
// }

// object1.printfullname(); // Sagar Kurewar

// let object2 = {
//     first_name : "Sachin",
//     last_name : "Tendulkar",
// }

//And now , if we have to print Sachin Tendulkar as full name , so we have to create method inside object2, which is not good way of writing
// so here comes concept of Borrowing,
// Yes we can borrow method from object1 using Call

// object1.printfullname.call(object2); // now it will print "Sachin Tendulkar"



//2) 2nd way

let printfullname = function () {
    console.log(this.first_name +" "+this.last_name);
}

let object3 = {
    first_name : "Virat",
    last_name : "Kohali",
}

printfullname.call(object3)