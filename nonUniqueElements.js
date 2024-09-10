function OLDnonUniqueElements(data) {
    let data$ = data.join(', ').concat(',');
    data$ = ','.concat(data$);
    const returnArr = [];

    data.forEach((a, i) => {
        let re = new RegExp(String.raw`(?:,)${a},`, "g");
        if (data$.match(re).length > 1) {
            returnArr.push(a);
        }
    });
    return returnArr;
}

function nonUniqueElements(data) {
    const returnArr = [];

    data.forEach((a, i) => {
        let data$ = [...data];
        data$.splice(i, 1);
        if (data$.includes(a)) {
            returnArr.push(a);
        }
    });

    return returnArr;
}

console.log(nonUniqueElements([-10, 10, 0, -10]));


// if you want to use a variable in your regex, you should construct a new RegExp object
// let re = new RegExp(String.raw`${variable},`, "g");
