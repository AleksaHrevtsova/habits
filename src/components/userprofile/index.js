
import css from '../../css/userprofile.css'

console.log(1337);

// ====================== renata

let goBack = document.querySelector(".s8_like_plusik");
goBack.addEventListener("click", () => {
  window.history.go(-1);
});
console.log(goBack);
// ===============================================================

let delButton = document.querySelector(".s8_btn_btr");
console.log(delButton);

const users1 = [{ id: "1" }];

// создаем прослушку для кнопки удалить
function removeChild(id) {
  if(users1.filter(users1.id === id)) {
    users1.remove();
   };
};
delButton.addEventListener("click", removeChild);

// ===============================================================

let elem = document.getElementById("myBar");
let startDate = Date.now();
console.log(startDate)
class Habit  {
   constructor(startDate, period){
     this.startDate = +startDate;
     this.period = period;
     this._currentDay = 0;
     this._progress = 0;
     }
     toSetCurrentDay(){
    let todayDate = Date.now();
    this.currentDay = (todayDate - this.startDate)/1000/60/60/24;
    return this._currentDay
  }
  get currentDay(){
    return this._currentDay
  }
}
const startDay = new Date('Oct 30 2020')

const myHabit = new Habit(startDay, 21)
console.log(myHabit)

// 

