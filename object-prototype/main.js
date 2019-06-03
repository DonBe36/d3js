//Задача 1

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;
  
    const result = checkBirthday(birthday) ? "Да" : "Нет";
  
    document.getElementById('disclaimer').innerHTML = result;   
  };
  
  function checkBirthday(birthday) {
    
    let now = new Date().getTime();
    let birthdayDate = new Date(birthday).getTime();
    let diff = now - birthdayDate;
    let age = diff / (24 * 60 * 60 * 1000 * 365);
    
    return (age > 18);  
  };
  
  // Задача 2
  
  function initPrintAnimalSound() {
    const animal = {
      sound: 'grrrr',
    };
    const result = getAnimalSound(animal);
    document.getElementById('sound').innerHTML = result;   
  };
  
  function getAnimalSound(animal) {
    let sound = animal.sound ;
    if (animal === undefined) {
      sound === null;
    } else {
      sound === animal.sound;
    };
    return sound;
  };
  
  //Задача 3
  
  function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
      const marks = document.getElementById('learner-' + idx).value.split(',');
  
      const average = getAverageMark(marks);
  
      document.getElementById('learner-' + idx + '-average').innerHTML = average;
    };
  };
  
  function getAverageMark(marks) {
    let allAverage = 0;
    let objLength  = 0;
    for ( let averageMark in marks ) {
      let value = marks[ averageMark ];
      let sum = 0;
      for (let i = 0; i < value.length; i++) {
        sum = sum + value[i];
      };
      marks[ averageMark ] = sum / value.length;
      allAverage = allAverage + marks[ averageMark ];
      objLength++ 
      marks.average = allAverage / objLength;
      };
    let average = marks.average;
    let roundedAverage = Math.round(average);
    return roundedAverage;
  };
  