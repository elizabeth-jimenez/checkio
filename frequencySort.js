function frequencySorting(numbers) {
    const arrMapCount = {};
    numbers.forEach(a => arrMapCount[a] = arrMapCount[a] ? (arrMapCount[a] + 1) : 1);
    return numbers.slice().sort((a, b) => arrMapCount[a] == arrMapCount[b] ? a - b : arrMapCount[b] - arrMapCount[a]);
}
console.log(frequencySorting([3, 4, 11, 13, 11, 4, 4, 7, 3]));
