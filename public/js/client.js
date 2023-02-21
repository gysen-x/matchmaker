const { registrationForm, loginForm } = document.forms;

const ulList = document.querySelector('.nav__list');
const modalWindow = document.getElementById('hiddenContainer');
const slider = document.querySelector('.cd-slider');
const table = document.getElementById('table');
const tableHeader = document.getElementById('table_header');

const modalRegistration = document.getElementById('modalRegistration');
const modalLogin = document.getElementById('modalLogin');
const modalCreateMatch = document.getElementById('modalCreateMatch');

ulList?.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.id === 'homepage') {
    window.location.replace('/');
  }
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
    await fetch('/user/logout');
  }
  if (event.target.id === 'findMatchLink') {
    const response = await fetch('/match/bysport', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(),
    });
    const result = await response.json();
    table.innerHTML = `<div class="wrapper">
    <div class="table-row header">
      <div class="table-row__title">
        <h4>Когда</h4>
      </div>
      <div class="table-row__data">Где</div>
      <div class="table-row__data">Условия участия</div>
      <div class="table-row__data">Контакты</div>
      <div class="table-row__data">Отозвались</div>
    </div>
    ${result.map((el) => (`
      <div class="table-row g-card">
        <div class="table-row__title">
          <h5>
            ${el.date}
          </h5>
        </div>
        <div class="table-row__data">
          <span class="label primary">
            ${el.address}
          </span>
        </div>
        <div class="table-row__data">
          ${el.conditions}
        </div>
        <div class="table-row__data">
          ${el.contacts}
        </div>
        <div class="table-row__data">
          ${el.players.length}
          /${el.max_players}
        </div>
      </div>
  `))}
</div>`;
    slider.style.display = 'none';
    table.style.display = 'block';
    tableHeader.style.display = 'grid';
  }
});

modalWindow?.addEventListener('click', (event) => {
  if (event.target.className === 'modal_window') {
    event.target.style.display = 'none';
  }
});

//! !Регистрация
registrationForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const values = new FormData(registrationForm);
    const data = Object.fromEntries(values);
    const response = await fetch('/user/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.message === 'Congratulations on successful registration') {
      modalRegistration.style.display = 'none';
      window.location.href = '/';
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error(error);
  }
});

//! ! Реализуем вход пользователя
loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const values = new FormData(loginForm);
    const data = Object.fromEntries(values);
    const response = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.message === 'Congratulations on successful login') {
      modalLogin.style.display = 'none';
      window.location.href = '/';
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
});
