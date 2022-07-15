let G_parent = document.getElementById("G_parent");
G_parent.addEventListener('click', () => {
    console.log("G_parent Clicked");
},true)

let Parent = document.getElementById("parent");
Parent.addEventListener('click', (e) => {
    console.log("Parent Clicked");
    // e.stopPropagation();//this will stop the propogation at this event.
},true)

let Child = document.getElementById("child");
Child.addEventListener('click', () => {
    console.log("Child Clicked");
}, true)

//Bydefault Event propagation is from bottom to top which is known as eventBubbling i.e Child > Parent > G_Parent

//Bydefault 3rd argument to addEventListener function is false which propagate event form bottom to top known as eventBubbling.

//But when you make it true , event will propogate form bottom to top known as eventCapturing. And eventCapturing is also known as eventTreklling.


