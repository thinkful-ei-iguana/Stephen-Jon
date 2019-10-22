/* eslint-disable no-console */
'use strict';

let sentence = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let words = sentence.split(' ');

console.log(words);

let decoded = words.reduce((decodedWord, word) => {
  if (word.length === 3){
    return decodedWord + ' ';
  } else{
    return decodedWord + word[word.length - 1].toUpperCase();
  } 
  
}, '');


console.log(decoded);


