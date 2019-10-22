'use strict';

function repeat(fn, n){
  for (let i = 0; i < n; i++){
    console.log(fn);
  }
}


function hello(){
  return 'Hello world';

}

function goodbye(){
  return 'Goodbye world';

}

repeat(hello(), 5);
repeat(goodbye(), 5);
