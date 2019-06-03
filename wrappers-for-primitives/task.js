"use strict"
function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let date = new Date(window.date.value);

  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {   
  let percentPay, contributionPay, amountPay;

    if (percent > 0) {  
      percentPay = + percent;
      } else if (percent != 0 || percent == 0) {
        return (`"Процентная ставка" имеет неверное значение ${percentPay}”.`);
      }

      if (contribution >= 0) {  
      contributionPay = + contribution;
      } else if (contribution !=  0) {
        return (`"Начальный взнос" имеет неверное значение ${contributionPay}”.`); 
      }
  
      if (amount >= 0) {  
       amountPay = + amount;
      } else if (amount !=  0) {
        return (`"Общая стоимость" имеет неверное значение ${amountPay}”.`); 
   };

   let curDate  = new Date(); 
   let periodPay = 0 - ((curDate.getFullYear() -  date.getFullYear()) * 12) - (curDate.getMonth() - date.getMonth());
   percentPay = percent / 1200; 
   let monthPay = amount * (percentPay + percentPay / (((1 + percentPay)**periodPay) - 1)); 
   let  totalAmount = monthPay * periodPay;  
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
  let anonim = "Аноним";
  
  if (name === "" || name === String(undefined) || name === String(null)) {
    greeting = `Привет, мир! Меня зовут ${anonim}.`;
    console.log(greeting);
    return greeting;
  } else {
    greeting = `Привет, мир! Меня зовут ${name}.`;
    console.log(greeting);
    return greeting 
  };  
};