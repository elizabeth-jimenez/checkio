function fuzzyStringMatch(str1, str2, threshold) {
    if (threshold === 0) {
        return str1 === str2;
    }
    let numDiff = 0;
    str1.split('').forEach((s, i) => {
        if (s !== str2[i]) {
            numDiff++
        }
    })
    return numDiff <= threshold;
}

console.log(fuzzyStringMatch("apple", "bpple", 1) === true);
console.log(fuzzyStringMatch("apple", "appel", 2) === true);
console.log(fuzzyStringMatch("apple", "bpple", 0) === false);
console.log(fuzzyStringMatch("apple", "apples", 1) === true);
console.log(fuzzyStringMatch("apple", "bpples", 2) === true);
console.log(fuzzyStringMatch("apple", "apxle", 1) === true);
console.log(fuzzyStringMatch("apple", "pxxli", 3) === false);
