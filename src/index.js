import css from "./css/style.css";
import habit from "./components/habit/habit.js";
import habitTemplate from "./templates/template.hbs";

function createHabit(e) {
    e.preventDefault();
    const data = {
      habitNameD: habitName.value,
    };
    insertElement(habitTemplate, data, habits);
    cntunderModal.style.display = "contents";
    closeDivs.style.display = "none";
  }
  
  submit.addEventListener("click", createHabit);
  
  function insertElement(template, data, place) {
    const elem = template(data);
    place.insertAdjacentHTML("beforeend", elem);
  }
  