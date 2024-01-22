// Your code here

function matrixBuilder(integer) {
    let arr = [];

    for (let y = 0; y < integer; y++) {
        arr[y] = [];
        for (let x = 0; x < integer; x++) {
            arr [y][x] = Math.floor(Math.random() * 2);

        }
        
    }

    return arr;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
