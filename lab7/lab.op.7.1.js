'use strict';

const removeElement = (array, element) => {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
    }
}


const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 5);
console.log(array1);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Pryluky'];
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');
console.log(array2);
