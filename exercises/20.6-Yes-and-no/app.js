let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
function wikiWoko(wiwo) {
    if (wiwo == 0) {
        return "woko";
    }
    else if (wiwo == 1) {
        return "wiki";
    }
}

let newArray = theBools.map(wikiWoko);

console.log(newArray);
