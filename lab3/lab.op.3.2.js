'use strict';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const random = (min, max) => {
            let a = Math.floor(Math.random() * (max - min + 1) + min)
            return a;
}

const generateKey = (length, characters) => {
    let key = '';
    for (let i = 0; i < length; i++) {
        key += (characters[random(0, characters.length - 1)]);
        }
        return key;
    } 
    
    


console.log(generateKey(100, characters));
