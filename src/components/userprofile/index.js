
import  "../../css/style.css";

//  ====================== renata

const upload = document.getElementById('photo-upload');
const avatar = document.querySelector(".user_photo");
const preview = document.getElementById("preview");
let imageType = /^image\//;
upload.addEventListener("change", handleFiles, false);
function handleFiles(event) {
  let file = event.target.files[0];
  console.log(event.target)
  if (!imageType.test(file.type)) {
    avatar.classList.add("avatar--upload-error");
    setTimeout(function(){
      avatar.classList.remove("avatar--upload-error");
    },1200);
  }

  avatar.classList.remove("avatar--upload-error");

  let img = document.getElementById("avatarimage");
  console.log(img)
  img.src = window.URL.createObjectURL(file);
  img.onload = function() {
    window.URL.revokeObjectURL(this.src);
  }
}


// =========================================  кнопка создать ====================
let createButton =document.querySelector('.create-btn');
createButton.addEventListener('click', createFile, false)
  function createFile(event) {
    let growth = document.getElementById('growth-input').value;
    let weight = document.getElementById('weight-input').value;
    let dateOfBirth = document.getElementById('birth-input').value;
}
// =============================================================