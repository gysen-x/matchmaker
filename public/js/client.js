const { registrationForm, loginForm } = document.forms;

const ulList = document.querySelector('.nav__list');
const modalWindow = document.querySelector('.modal_window');

const modalRegistration = document.getElementById("modalRegistration");
const modalLogin = document.getElementById("modalLogin");
const modalCreateMatch = document.getElementById("modalCreateMatch");

ulList?.addEventListener('click', async (event) => {
    event.preventDefault();
if (event.target.id === 'regLink') {
    modalRegistration.style.display = 'block';
}
if (event.target.id === 'loginLink') {
    modalLogin.style.display = 'block';
}
if (event.target.id === 'createMatchLink') {
    modalCreateMatch.style.display = 'block';
}
if (event.target.id === 'logoutLink') {
    await fetch("/user/logout");
}
})

modalWindow?.addEventListener('click', (event) => {
    if (event.target.className === '.modal_window') event.target.style.display = "none";
})



registrationForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const values = new FormData(registrationForm);
      const data = Object.fromEntries(values);
      const response = await fetch("/user/registration", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify( data ),
      });
      const result = await response.json();
      if (result.status === 200) {
        modalRegistration.style.display = "none";
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  });
  
  //!! Реализуем вход пользователя
  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const values = new FormData(loginForm);
      const data = Object.fromEntries(values);
      const response = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.status === 200) {
        modalLogin.style.display = "none";
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  });

