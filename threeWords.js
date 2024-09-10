function threeWords(text) {
    const matches = text.match(/([A-z]+\s){2,}[A-z]+/g);
    return matches ? matches.length > 0 : false;
}

function threeWords(text) {  
    return text.split(' ').reduce(
        (acc, cur) => {
            if(acc > 2) {
                return acc;
            }
            return Number.parseInt(cur) ? 0 : ++acc;
        },
        0,
      ) > 2;
}

// a, not mine, fancy solution 😭
function threeWords(text) {
    return (/([A-z]+\b\s*){3,}/g).test(text);
}


console.log(threeWords("Hello World d") === true);
console.log(threeWords("He is 123 man") === false);
console.log(threeWords("1 2 3 4") === false);
console.log(threeWords("bla bla bla bla") === true);
console.log(threeWords("Hi") === false);
console.log(threeWords("one two 3 four five six 7 eight 9 ten eleven 12") === true);