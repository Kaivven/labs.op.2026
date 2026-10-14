'use strict';

const random = (min, max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    let a = Math.floor(Math.random() * (max - min + 1) + min)
    return a;
}

console.log(random(0, 20));