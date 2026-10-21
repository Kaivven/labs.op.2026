'use strict';

const sum = (...args) => {
    let total = 0;
    let i = 0;
    while (i < args.length)  {
        total += args[i];
        i++;
    }
    return total;
};

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));
