const { registrationForm, loginForm } = document.forms;

const ulList = document.querySelector('.nav__list');
const modalWindow = document.getElementById('hiddenContainer');
const slider = document.querySelector('.cd-slider');
const table = document.getElementById('table');
const tableHeader = document.getElementById('table_header');

const modalRegistration = document.getElementById('modalRegistration');
const modalLogin = document.getElementById('modalLogin');
const modalCreateMatch = document.getElementById('modalCreateMatch');

const wrapperFindMatch = document.querySelector('.findMatchListner');
const userAccount = document.getElementById('user-account');
const userId = userAccount?.dataset?.userid;

wrapperFindMatch?.addEventListener('click', async (event) => {
  if (event.target.dataset.findmatch === 'findMatch') {
    event.preventDefault();
    const sportid = Number(event.target.dataset.sportid);
    const response = await fetch('/match/bysport', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ sport_id: sportid }),
    });
    const result = await response.json();
    table.style.gridTemplateRows = `repeat(${result.length}, 1fr)`;
    table.innerHTML = `
    <div class="table-row">
    <div class="gridItem">Когда</div>
 <div class="gridItem">Где</div>
 <div class="gridItem">Условия участия</div>
 <div class="gridItem">Контакты</div>
 <div class="gridItem">Отозвались</div>
 <div class="gridItem">Действия</div>
 </div>
${result.map((el, index) => (`
<div class="table-row" data-match-id="${el.id}">
<div class="table-row__data">
   ${el.date}
 </div>
 <div class="table-row__data">
   ${el.address}
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
${(Number(userId) === Number(el.admin_id)) ? (`
<button>Удалить матч</button>
`) : (`
<button>Принять участие</button>
`)}
<button>Отменить</button>
</div> 
`)).join('')}`;

    slider.style.display = 'none';
    table.style.display = 'flex';
    tableHeader.style.display = 'flex';
  }
});

ulList?.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.id === 'homepage') {
    // window.location.replace('/');
    slider.style.display = 'block';
    table.style.display = 'none';
    tableHeader.style.display = 'none';
  }
  if (event.target.id === 'regLink') {
    modalRegistration.style.display = 'flex';
  }
  if (event.target.id === 'loginLink') {
    modalLogin.style.display = 'flex';
  }
  if (event.target.id === 'createMatchLink') {
    modalCreateMatch.style.display = 'flex';
  }
  if (event.target.id === 'logoutLink') {
    await fetch('/user/logout');
    window.location.replace('/');
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
    table.style.gridTemplateRows = `repeat(${result.length}, 1fr)`;
    table.innerHTML = `
    <div class="table-row">
    <div class="gridItem">Когда</div>
 <div class="gridItem">Где</div>
 <div class="gridItem">Условия участия</div>
 <div class="gridItem">Контакты</div>
 <div class="gridItem">Отозвались</div>
 <div class="gridItem">Действия</div>
 </div>
${result.map((el, index) => (`
<div class="table-row" data-match-id="${el.id}">
<div class="table-row__data">
   ${el.date}
 </div>
 <div class="table-row__data">
   ${el.address}
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
${(Number(userId) === Number(el.admin_id)) ? (`
<button>Удалить матч</button>
`) : (`
<button>Принять участие</button>
`)}
<button>Отменить</button>
</div> 
`)).join('')}`;

    slider.style.display = 'none';
    table.style.display = 'flex';
    tableHeader.style.display = 'flex';
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
