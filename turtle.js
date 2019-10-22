'use strict';

let turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let alwaysForward = turtleMoves.filter(elem => elem[0] < 0 || elem[1] < 0);

console.log(alwaysForward);

let totalSteps = turtleMoves.map(elem => elem[0] + elem[1]);

console.log(totalSteps);


let turtleLog = totalSteps.forEach(function(steps, i){
  console.log(`Movement #${i}: ${steps} steps`);
});


