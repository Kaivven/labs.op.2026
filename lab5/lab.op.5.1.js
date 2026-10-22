'use strict'

const seq = (firstarg) => {
    const arr = [firstarg];
    const next = (nextArg) => {
    if(typeof nextArg === 'function') {
        arr.push(nextArg);
        return next;
    }
    if(typeof nextArg === 'number') {
        let result = nextArg;
        for(let i = arr.length - 1; i >= 0; i--) {
            result = arr[i](result);
        } return result; 
    } 
    };
    return next;
};


console.log(seq(x => x + 7)(x => x * 2)(5))
console.log(seq(x => x * 2)(x => x + 7)(5))
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7))