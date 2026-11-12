'use strict';

const array = () => {
    const place = [];
    const index = (number) => {
        return place[number];
    }

    index.push = (element) => {
        place.push(element);
    }

    index.pop = () => {
        return place.pop();
    }
    return index;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());
