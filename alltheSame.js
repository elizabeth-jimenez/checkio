function allTheSame(elements) {
    if(elements.length < 2) {
        return true;
    }
    
    return elements.every(a => a === elements[0]);
}

console.log(allTheSame([1, 1, 1]) === true);
console.log(allTheSame([1, 2, 1]) === false);
console.log(allTheSame([1, "a", 1]) === false);
console.log(allTheSame([1, 1, 1, 2]) === false);
console.log(allTheSame([]) === true);
console.log(allTheSame([1]) === true);
