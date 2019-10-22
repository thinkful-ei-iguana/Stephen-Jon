'use strict';

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    if (warningCounter >= 2){
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    }
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');

const tornadoWarning = hazardWarningCreator('There is a tornado!');

const mudslide = hazardWarningCreator('Mudslides reported in area!');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
tornadoWarning('Kraft and Barg St.');
tornadoWarning('Right and Left St.');
mudslide('Avery and Forrest');
mudslide('Dublin and London');





