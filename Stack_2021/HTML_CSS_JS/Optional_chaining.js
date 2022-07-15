//Earlier we do like

//case1:
let data = {
    person: {
        name: "",
        age: 26
    }
}

console.log(data.person.name || 'sagar'); //This will print sagar, which is wrong , bcz there exist a string which is empty

//case2:
let data1 = {
    person: {
        name: "sagar",
        age: 0
    }
}

console.log(data1.person.age || 26); //This will print 26, which is wrong , bcz there exist a age which is 0;

//certain improvement.
//case1:
let data2 = {
    person: {
        name: "sagar",
        age: 0
    }
}

console.log(data2 && data2.person && data2.person.age); //This will print 0, 
//case2:
let data3 = {
    person: {
        name: "sagar", 
    }
}

console.log(data3 && data3.person && data3.person.age); //This will print undefined.


//Optional Chaining comes into picture which is same as line 40

let data4 = {
    person: {
        name: "sagar", 
    }
}

console.log(data4?.person?.name);//sagar
console.log(data4?.person?.age);//undefined



