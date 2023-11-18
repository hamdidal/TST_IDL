const data = [4,[[5],[6,[7],8],9,10]];
const flattenedData = data.reduce((accumulator, item) => {
    if (Array.isArray(item)) {
        return accumulator.concat(item);
    } else {
        return accumulator.concat([item]);
    }
}, []);

console.log(flattenedData);
