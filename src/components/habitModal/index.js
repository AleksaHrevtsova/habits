import data from "../../store"
console.log(data);

// open modal
const show = document.getElementById('showModal');
const close = document.getElementById('closeModal');
const closeDivs = document.getElementById('close');
const cntUnderModal = document.getElementById('cntunderModal');

function showFunc(){
    cntunderModal.style.display = 'none';
    closeDivs.style.display = 'contents';
}

function closeFunc(){
    cntunderModal.style.display = 'contents';
    closeDivs.style.display = 'none';
}

show.addEventListener('click', showFunc);
close.addEventListener('click', closeFunc);

// add habit
const inputWrap = document.getElementById('inputWrap');
const habitName = document.getElementById('modalInpName');
const habitForWhich = document.getElementById('modalInpTxt');
const habitRepeat = document.getElementById('repeat');
const selectColor = document.getElementById('selectColor');

const submit = document.getElementById('submit');
// const selectColor = document.getElementById('selectColor'); - Доделать
const header = document.querySelector('header');


function switchHeadBGColor(e){
    e.preventDefault();
    console.log(selectColor.value)
    header.style.backgroundColor = selectColor.value;
}
function giveInfo(e){
    e.preventDefault();
    let nameValue = habitName.value;
    let habitMotivationValue = habitForWhich.value;
    let habitRepeatValue = habitRepeat.value;
    let colorValue = selectColor.value;

    cntunderModal.style.display = 'contents';
    closeDivs.style.display = 'none';
    // createHabit(nameValue, habitMotivationValue, habitRepeatValue, colorValue);
}

selectColor.addEventListener('submit', switchHeadBGColor);

submit.addEventListener('click', giveInfo);
inputWrap.addEventListener('click', switchHeadBGColor);