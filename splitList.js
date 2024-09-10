function splitList(x) {
    let half = Math.ceil(x.length/2);
    return [x.slice(0, half), x.slice(half)];
}

console.log(splitList([1, 2, 3, 4, 5, 6]));