//new features of promise

// Promise.all([p1,p2,p3])//wait for all, -but abort on any failure
// Promise.race([p1,p2,p3])//wait for all, -but abort on first success or failure
// Promise.allSettled([p1,p2,p3])//wait for all
// Promise.any([p1, p2, p3])//wait for all, -but abort on first success.


function Delay() {
    return Math.floor(Math.random() * 1000);
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1')
    }, Delay());
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('p2')
    }, Delay());
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3')
    }, Delay());
})


async function TryAll() {
    try {
        let result1 = await Promise.all([p1, p2, p3]);
        console.log('result1:', result1)

    } catch (error) {
        console.log(error);
    }
}

// TryAll()//result1: [ 'p1', 'p2', 'p3' ], bcz all three are resolved
// TryAll()//result1: p2, bcz p2 is reject 

async function TryTRace() {
    try {
        let result1 = await Promise.race([p1, p2, p3]);
        console.log('result1:', result1)

    } catch (error) {
        console.log(error);
    }
}

// TryTRace()//result1: p1, bcz abort on first success or failure
