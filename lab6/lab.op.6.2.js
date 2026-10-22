'use strict'

const pipe = (...fns) => {
    let Errors = null;
    const ErrorFinder = (x) => {
        let result = x;
        for(let i = fns.length - 1; i >= 0; i--) {
            try {
                result = fns[i](result);
            }
            catch (err) {
                if (Errors !== null) {
                    Errors(err);
                }
                return undefined;
            }
    } return result;
}
    ErrorFinder.on = (name, callback) => {
            if(name === 'error') {
                Errors = callback;
            }
        }
    return ErrorFinder;

}


const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
const func = x => {
    throw new Error('Error function!')
}

const f = pipe(inc, twice, cube);
const g = pipe(inc, func, cube);

f.on('error', e => { console.log('error:', e.message) });
g.on('error', e => { console.log('error:', e.message) });

const x = f(5);
console.log(x);
const y = g(5);
console.log(y);
