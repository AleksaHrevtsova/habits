/*  Разрабы этого файла  : !!!!
Илья Дмитренко (dmytrenko_habit_page )- 2 кнопки удаления* график * прогрес *
Данил Пащенко (danilPaschenko_HabitPage)- кнопки *назад* и *далее* / календарь

**!!__||Имена переменных||__!!**
      \/                \/
       habitInfo_Имя Переменной
***************************************
Для совместной работы в ветках нам нужно :

❗️Запушить свои последние изменения

git add .

git commit -m "message
git push origin originName

❗️Стянуть последние обновления с ветки другого разраба

git pull origin DeveloperOriginName

*/
import css from '../../css/HabitInfo.css'
import data from "../../store"
console.log("HABIT INFO", data);

function Calendar(id, year, month) {
      let Dlast = new Date(year,month+1,0).getDate()
      let D = new Date(year,month,Dlast)
      let DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay()
      let DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay()
      calendar = '<tr>'
      month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
      if (DNfirst != 0) {
        for(let  i = 1; i < DNfirst; i++) calendar += '<td>';
      }else{
        for(let  i = 0; i < 6; i++) calendar += '<td>';
      }
      for(let  i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
          calendar += '<td class="habitInfo_today">' + i;
        }else{
          calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
          calendar += '<tr>';
        }
      }
      for(let  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
      document.querySelector('#'+id+' tbody').innerHTML = calendar;
      document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
      document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
      document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
      if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
          document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
      }
      }
      Calendar("habitInfo_calendar_table", new Date().getFullYear(), new Date().getMonth());
      // переключатель минус месяц
      document.querySelector('#habitInfo_calendar_table thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
        Calendar("habitInfo_calendar_table", document.querySelector('#habitInfo_calendar_table thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('habitInfo_calendar_table thead td:nth-child(2)').dataset.month)-1);
      }
      // переключатель плюс месяц
      document.querySelector('habitInfo_calendar_table thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
        Calendar("habitInfo_calendar_table", document.querySelector('#habitInfo_calendar_table thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#habitInfo_calendar_table thead td:nth-child(2)').dataset.month)+1);
      }