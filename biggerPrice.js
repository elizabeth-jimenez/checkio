function biggerPrice(limit, data) {
    const prices = [];
    const returnArr = [];
    const dataGroupBy = {};
    data.forEach(a => {
        dataGroupBy[a.price] = a;
        prices.push(a.price);
    });
    const pricesS = prices.sort((a, b) => b - a).splice(0, limit);
    pricesS.forEach(a => returnArr.push(dataGroupBy[a]));
    return returnArr;
}

console.log(biggerPrice(2, [
    { name: "bread", price: 100 },
    { name: "wine", price: 138 },
    { name: "meat", price: 15 },
    { name: "water", price: 1 },
]));