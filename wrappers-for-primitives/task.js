"use strict"
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {   
     if (percent > 0) {  
       percent = + percent;
     } else if (percent != 0 || percent == 0) {
         return (`"Процентная ставка" имеет неверное значение ${percent}”.`);
     }

     if (contribution >= 0) {  
       contribution = +contribution;
     } else if (contribution !=  0) {
         return (`"Начальный взнос" имеет неверное значение ${contribution}”.`); 
     }
  
     if (amount >= 0) {  
       amount = +amount;
     } else if (amount !=  0) {
         return (`"Общая стоимость" имеет неверное значение ${amount}”.`); 
     };

   let curDate  = new Date(); 
   date = new Date(window.date.value);
   let periodPay = 0 - ((curDate.getFullYear() -  date.getFullYear()) * 12) - (curDate.getMonth() - date.getMonth());
   date = periodPay; 
   percent = percent / 1200; 
   let monthPay = amount * (percent + percent / (((1 + percent)**date) - 1)); 
   let  totalAmount = monthPay * date;  
   console.log(totalAmount.toFixed(2));
   return totalAmount.toFixed(2); 
};

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
};

function getGreeting(name) {
  let greeting = "";
  
  if (name === "" || name === String(undefined) || name === String(null)) {
    greeting = "Привет, мир! Меня зовут Аноним.";
    console.log(greeting);
    return greeting;
  } else {
      greeting = `Привет, мир! Меня зовут ${name}.`;
      console.log(greeting);
      return greeting 
  };  
};