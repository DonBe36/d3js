//Задача №1

function getSolutions(a, b, c) {
  let D = b**2 - 4 * a * c;
  let x1, x2;
  if (D > 0) {
    x1 = ((-b - Math.sqrt(D))/(2 * a));
   x2 = ((-b + Math.sqrt(D))/(2 * a));
    return { roots: [x1, x2], D: D };
 } else if (D < 0) {
   return { D: D };
 } else if (D == 0) {
    x1 = -b/2 * a;
    return { roots: x1, D: D };
  };
};

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
 console.log("Вычисляем корни квадратного уравнения: " + a + "x²" + "+" + b + "x" + "+" + c);
 console.log("Значение дискриминанта: " + result.D);
 if (result.D > 0) {
    console.log("Уравнение имеет два корня. X₁ = " + result.roots[0] + ", " + "X₂ = " + result.roots[1]);
 } else if (result.D == 0) {
    console.log("Уравнение имеет один корень X₁ = " + result.roots);
  } else {
  console.log("Уравнение не имеет вещественных корней");
  };
};

showSolutionsMessage( 1, 2, 3 );
showSolutionsMessage( 7, 20, -3 );
showSolutionsMessage( 2, 4, 2);


//Задача 2
function getAverageScore(data) {
  let allAverage = 0;
  let objectLength  = 0;
  for ( let averageMark in data ) {
    let value = data[ averageMark ];
    let sumResult = 0;
    for (let i = 0; i < value.length; i++) {
      sumResult = sumResult + value[i];
    };
    data[ averageMark ] = sumResult / value.length;
    allAverage = allAverage + data[ averageMark ];
    objectLength++ 
    data.average = allAverage / objectLength;
  };
  return data;
};

  console.log(getAverageScore({
    algebra: [3,4,5,4,5],
    music: [3,4,5],
    chemistry: [3,2,4,5],
    geometry: [3,4,5,4,5],
    russian: [3],
    physics: [3,4,4,5],
    english: [3,4,5],
    poetry: [3,4,5,2,5],
    french: [3,3,4,5],
    geography: [3,4,5]
  
  }));

  // Задача № 3


  function getPersonData(secretData) {

    function personData(value) {
      return (value === 0) ? 'Родриго' : 'Эмильо';
    };
  
    let firstName = personData(secretData.aaa), lastName = personData(secretData.bbb);
    let result = {
      firstName,
      lastName
    };
    return result;
  };
  

console.log(getPersonData({aaa: 0, bbb: 0}));
console.log(getPersonData({aaa: 1, bbb: 1}));
console.log(getPersonData({aaa: 0, bbb: 1}));
console.log(getPersonData({aaa: 1, bbb: 0}));

  



