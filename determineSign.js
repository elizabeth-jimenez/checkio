function determineSign(num) {
    if (num === 0) {
        return 'zero';
    }
    else if (num > 0) {
        return 'positive';
    }
    else {
        return 'negative';
    }
}

console.log(determineSign(5) === "positive");
console.log(determineSign(0) === "zero");
console.log(determineSign(-10) === "negative");
console.log(determineSign(1) === "positive");
console.log(determineSign(-1) === "negative");
console.log(determineSign(999) === "positive");
console.log(determineSign(-1000) === "negative");
console.log(determineSign(123456789) === "positive");
console.log(determineSign(-987654321) === "negative");
console.log(determineSign(2) === "positive");