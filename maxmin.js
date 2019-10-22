function max(numbers){
  'use strict';
  
  let currentMax = numbers[0];
  let i = 0;
  while (i < numbers.length){
    if (numbers[i] > currentMax){
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}

let thisArray = [];
console.log(max(thisArray));
