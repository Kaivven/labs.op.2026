'use strict'

const pipe = (...fns) => {
    for(const key of fns) {
        if (typeof key !== 'function')
            throw new Error('Not a function!')
    }
    return (x) => fns.reduce((acc, fn) => fn(acc), x);
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const x = f(5);
console.log(x)