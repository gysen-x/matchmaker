const { registrationForm, loginForm } = document.forms;

const ulList = document.querySelector('.nav__list');
const modalWindow = document.getElementById('hiddenContainer');
const slider = document.querySelector('.cd-slider');
const table = document.getElementById('table');
const tableHeader = document.getElementById('table_header');
// const currentMatchTable = document.getElementById("currentMatchTable");

const modalRegistration = document.getElementById('modalRegistration');
const modalLogin = document.getElementById('modalLogin');
const modalCreateMatch = document.getElementById('modalCreateMatch');

const wrapperFindMatch = document.querySelector('.findMatchListner');
const userAccount = document.getElementById('user-account');
const userId = userAccount?.dataset?.userid;
const noMatchButton = document.getElementById('nomatch-button');

wrapperFindMatch?.addEventListener('click', async (event) => {
  if (event.target.id === 'nomatch-button') {
    if (userId) {
      document.getElementById('createMatchLink').click();
    } else {
      document.getElementById('loginLink').click();
    }
  }
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
    table.innerHTML = drawTable(result.matches);
    document.getElementById('searchButton').dataset.sportid = sportid;
    // currentMatchTable.innerHTML = currentMatchesTable(result.actionMatches);
    // currentMatchTable.style.display = "flex";

    document.querySelector('.searchbar__wrapper').style.display = 'flex';
    slider.style.display = 'none';
    table.style.display = 'flex';
    tableHeader.style.display = 'flex';
  }
});

ulList?.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.id === 'homepage') {
    document.querySelector('.searchbar__wrapper').style.display = 'none';
    document.querySelector('.findMatchListner').style.display = 'block';
    document.querySelector('.profile-container').style.display = 'none';
    document.querySelector('.contacts-container').style.display = 'none';
    document.querySelector('.tournaments-container').style.display = 'none';
    slider.style.display = 'block';
    table.style.display = 'none';
    tableHeader.style.display = 'none';
  }
  if (event.target.id === 'regLink') {
    modalRegistration.style.display = 'flex';
  }
  if (
    event.target.id === 'loginLink'
    || event.target.id === 'secondLoginLink'
  ) {
    modalLogin.style.display = 'flex';
  }
  if (event.target.id === 'createMatchLink') {
    modalCreateMatch.style.display = 'flex';
    document.querySelector('.searchbar__wrapper').style.display = 'none';
    document.querySelector('.findMatchListner').style.display = 'block';
    document.querySelector('.profile-container').style.display = 'none';
    document.querySelector('.contacts-container').style.display = 'none';
    document.querySelector('.tournaments-container').style.display = 'none';
  }
  if (event.target.id === 'logoutLink') {
    await fetch('/user/logout');
    window.location.replace('/');
  }
  if (event.target.id === 'findMatchLink') {
    document.querySelector('.searchbar__wrapper').style.display = 'none';
    document.querySelector('.findMatchListner').style.display = 'block';
    document.querySelector('.profile-container').style.display = 'none';
    document.querySelector('.contacts-container').style.display = 'none';
    document.querySelector('.tournaments-container').style.display = 'none';
    const response = await fetch('/match/bysport', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(),
    });
    const result = await response.json();
    table.innerHTML = drawTable(result.matches);
    // currentMatchTable.innerHTML = currentMatchesTable(result.actionMatches);
    // currentMatchTable.style.display = "flex";

    document.querySelector('.searchbar__wrapper').style.display = 'flex';
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

//! ! Регистрация
registrationForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const errorWrapper = registrationForm.querySelector('.error-wrapper');
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
      errorWrapper.innerHTML = result.message;
    }
  } catch (error) {
    console.error(error);
  }
});

//! ! Реализуем вход пользователя
loginForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const errorWrapper = loginForm.querySelector('.error-wrapper');
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
      errorWrapper.innerHTML = result.message;
    }
  } catch (error) {
    console.log(error);
  }
});

noMatchButton?.addEventListener('click', (event) => {
  console.log('click');
  // document.getElementById('createMatchLink').click();
});
