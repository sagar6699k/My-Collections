//Constructor Function 

// function player(n,t) {
//     this.name = n;
//     this.team = t;
// }

// var player1 = new player('Virat','RCB');
// var player2 = new player('Rohit','Mumbai');
// var player3 = new player('Warner','Hyd');



// console.log(player1);
// console.log(player2);
// console.log(player3);


//Using call

// var person = {
//     name :'pratik'
// }

// function myInfo(m,c) {
//     this.age = m;
//     this.City = c;

// }

// myInfo.call(person,25,'wani');
// console.log(person);


//Using apply

var person = {
    name :'pratik'
}

function myInfo(m,c,s) {
    this.Age = m;
    this.City = c;
    this.State = s;


}

var arr = [25,'wani','Maharashtra'];
myInfo.apply(person,arr);
console.log(person);