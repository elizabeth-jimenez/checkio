function stringPermutations(s)
{
    const permArr = [];
    if(s.length === 1) {
        return [s];      
    }

    const myArr = s.split('');

    myArr.forEach((e, i) => {
        const myArrChars = myArr.toSpliced(i, 1);
        const subPerms = stringPermutations(myArrChars.join(''));
        subPerms.forEach(p => {
            permArr.push(e.concat(p));
        })
    })
    return permArr.sort();
}


console.log(stringPermutations('abcd'));