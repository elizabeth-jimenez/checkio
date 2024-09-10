function backwardStringByWord(text) {
    const textArr = text.split(' ');
    const textArrR = [];
    textArr.forEach((a, i) => {
        textArrR.push(...a.split('').toReversed());
        if(i < textArr.length - 1) {
            textArrR.push(' ');
        }
    });
    return textArrR.join('');
}

console.log(backwardStringByWord('welcome to a game'));