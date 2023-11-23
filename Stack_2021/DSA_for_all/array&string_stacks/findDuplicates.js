//Using BruteForce
function findDuplicates(arr) {
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
}


// Using Set:
function findDuplicates(arr) {
    let uniqueElements = new Set();
    let duplicates = new Set();

    for (let element of arr) {
        if (uniqueElements.has(element)) {
            duplicates.add(element);
        } else {
            uniqueElements.add(element);
        }
    }

    return Array.from(duplicates);
}



const myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];
const duplicateElements = findDuplicates(myArray);
console.log("Duplicate elements: ", duplicateElements);



