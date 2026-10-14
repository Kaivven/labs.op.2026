'use strict';

const moveIP = (ip = '127.0.0.1') => {
    const item = ip.split('.')
    const shift = (num, str) => (num << 8) + parseInt(str, 10);
    return item.reduce(shift, 0);
}

console.log(moveIP('8.8.8.8'));
