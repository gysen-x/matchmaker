/* eslint-disable max-len */
// 1) form name="create_match_form   форма создания матча
// 2) form name="registration_form" форма регистрации
// 3) form name=«login_form" форма логина

// user - login reg logout
// sport - список всех видов спорта (появляется навбар с играми)
// logicmatch - проверяем дату, создаем матч и создаем запись в энтри того, кто создал матч (если ты создал матч, ты в него записываешься как игрок)
// метод, который показывает все матчи по спорт_ид, внутри каждого матча показываются все игроки, которые записаны
// удалить матч entrie.destroy({where:{match_id}})
// находим матч, вытаскиваем поле максплеерс, находим всех игроков, у которых энтри в этом матче, если хотим зайти в матч, проверяем есть ли он в этом энтри, если он там есть, выкидываем ошибку, если число игроков меньше максимума, все норм, если равно, то выкидываем ошибку
// можем выйти из матча, проверяем, существует ли такая игра, если нет, выкидываем ошибку, проверяем наличие игрока, если его там нет, то выкидываем ошибку, если число игроков = 1, то мы удаляем энтри и матч, если больше 1, то удаляем энтри и выдаем сообщение, что запись удалена

const { createMatchForm } = document.forms;
const { registrationForm } = document.forms;
const { loginForm } = document.forms;

const modalRegistration = document.getElementById("modalRegistration");
const modalLogin = document.getElementById("modalLogin");
const modalCreateMatch = document.getElementById("modalCreateMatch");

//!! Регистрируем пользователя
registrationForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const values = new FormData(registrationForm);
    const data = Object.fromEntries(values);
    const response = await fetch("/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
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
    const response = await fetch("/user/registration", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
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

//!! Создаем матч
createMatchForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const values = new FormData(createMatchForm);
  const data = Object.fromEntries(values);
  const response = await fetch("/match", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  const result = await response.json();
  if (result.status === 200) {
    modalCreateMatch.style.display = "none";
    // modalAlert(result.message)
  } else {
    alert(result.message);
  }
});

//!! Получение id вида спорта/переключение матчей в данной категории
const a = document.querySelector("body");

a?.addEventListener("click", async (event) => {
  try {
    const sportId = event.target.dataset.sportid;
    const response = await fetch("/match/bysport", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ sportId }),
    });
    const result = await response.json();
    if (result.status === 200) {
      //innerHTML =
    } else {
      alert(result.message);
    }
  } catch (e) {
    console.log(e);
  }
});
