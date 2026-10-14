'use strict';

const moveIP = (ip = '127.0.0.1') => {
    const item = ip.split('.')
    return item.reduce((num, str) => (num << 8) + parseInt(str, 10), 0);
}

console.log(moveIP('127.0.0.1'));
console.log(moveIP('10.0.0.1'));
console.log(moveIP('192.168.1.10'));
console.log(moveIP('165.225.133.150'));
console.log(moveIP('0.0.0.0'));
console.log(moveIP());  
