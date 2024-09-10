function sumNumbers(text) {
    const re = /\d+\b/g;
    const found = text.match(re);
    if (found) {
        return found.reduce((acc, cur) => acc + parseInt(cur), 0);
    }
    return 0;
}


console.log(sumNumbers("hi") === 0);
console.log(sumNumbers("who is 1st here") === 0);
console.log(sumNumbers("my numbers is 2") === 2);
console.log(
    sumNumbers(
        "This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year"
    ) ===
    3755
);
console.log(sumNumbers("5 plus 6 is") === 11);
console.log(sumNumbers("") === 0);