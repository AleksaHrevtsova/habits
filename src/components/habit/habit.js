var d = new Date();

let date1 = document.getElementById('date1');
let date2 = document.getElementById('date2');
let date3 = document.getElementById('date3');
let date4 = document.getElementById('date4');

let date1V = d.getDay() - 3;
let date2V = d.getDay() - 2;
let date3V = d.getDay() - 1;
let date4V = d.getDay();

const dates = {
  1: 'пн',
  2: 'вт',
  3: 'ср',
  4: 'чт',
  5: 'пт',
  6: 'сб',
  7: 'вс'
}

date1V = dates[date1V];
date2V = dates[date2V];
date3V = dates[date3V];
date4V = dates[date4V];

date1.textContent = date1V;
date2.textContent = date2V;
date3.textContent = date3V;
date4.textContent = date4V;

let date1С = document.getElementById('date1С');
let date2С = document.getElementById('date2С');
let date3С = document.getElementById('date3С');
let date4С = document.getElementById('date4С');

let date1VС = d.getUTCDate() - 3;
let date2VС = d.getUTCDate() - 2;
let date3VС = d.getUTCDate() - 1;
let date4VС = d.getUTCDate();

date1C.textContent = date1VС;
date2C.textContent = date2VС;
date3C.textContent = date3VС;
date4C.textContent = date4VС;

