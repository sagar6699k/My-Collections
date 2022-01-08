let thirdLink = {
    data : 3,
    next : null,
}
let secondLink = {
    data : 2,
    next : thirdLink,
}
let firstLink = {
    data : 1,
    next : secondLink,
}


let head = firstLink;
let currentData = head; 

console.log(currentData);

while (currentData.next) {
    currentData = currentData.next;
    console.log(currentData);
}