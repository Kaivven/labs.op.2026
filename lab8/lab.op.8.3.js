'use strict';

const contract = (fn, ...types) => {
    const newFn = (...args) => {
        for (let i = 0; i < args.length; i++) {
            if(typeof args[i] !== types[i].name.toLowerCase()) {
                throw new TypeError('error');

            } 
            }
        const result = fn(...args);
        if(typeof result !== types[types.length - 1].name.toLowerCase()) {
            throw new TypeError('Error');
        }
        return result;
        }
    return newFn;
    }


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); 