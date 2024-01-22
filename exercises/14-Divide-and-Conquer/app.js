let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];


// Your code here
function mergeTwoList(newArrayNumbers) {
    let odd = [];
    let even = [];

    for (let i = 0; i < newArrayNumbers.length; i++) {
        
        if (newArrayNumbers[i] % 2 === 1) {
            odd.push(newArrayNumbers[i]);
        }
        else if (newArrayNumbers[i] % 2 === 0) {
            even.push(newArrayNumbers[i]);
        }
    }

    return odd.concat(even);
}

console.log(mergeTwoList(listOfNumbers));