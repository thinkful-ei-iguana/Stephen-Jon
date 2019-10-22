'use strict';

function average(num) {
    let sum = 0
    num.forEach(n => sum += n);
    return sum / num.length;
}

console.log(average([1,2,3,4,5]));