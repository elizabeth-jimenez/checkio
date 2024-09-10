function countDigits(text) {
    const digit = text.match(/\d/g);
    return digit ? digit.length : 0;
}

console.log(countDigits('This picture is an oil on canvas painting by Danish arti year'));
