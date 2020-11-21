import "../../css/auth.css";
import refs from "../refs.js";

refs.loginBtn.addEventListener("click", () => {
  alert(`Вы действительно хотите войти в личный кабинет?`);

  refs.authSection.style.display = "none";

  refs.signInSection.style.display = "flex";
  refs.header.classList.add("header");
});

refs.registerBtn.addEventListener("click", () => {
  alert(`Вы действительно хотите зарегистрироваться?`);

  refs.authSection.style.display = "flex";

  refs.signUpSection.style.display = "flex";
  refs.header.classList.add("header");
});

refs.headerLeftBtn.addEventListener("click", () => {
  alert(`Вы действительно хотите вернуться на главную?`);

  refs.authSection.style.display = "flex";

  refs.signUpSection.style.display = "none";
  refs.signInSection.style.display = "none";

  refs.header.classList.remove("header");
});
