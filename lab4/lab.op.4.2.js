'use strict';

const max = (arr) => {
    let value = -Infinity;
    for(const rows of arr) {
        for(const num of rows) {
            if(num > value) {
                value = num;
            }
        }
    }
    return value;
}

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(max([[-1, 23, -31], [44, 85, -6], [7, -8, 91]]));
