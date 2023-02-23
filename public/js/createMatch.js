const { createMatchForm } = document.forms;

// const slider = document.querySelector('.cd-slider');
// const table = document.getElementById('table');
// const tableHeader = document.getElementById('table_header');
// const userAccount = document.getElementById('user-account');
// const userId = userAccount?.dataset?.userid;

createMatchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const sportid = document.getElementById('sport_id').value;
  const game = document.getElementById('game');
  const date = document.getElementById('date');
  const dateEnd = document.getElementById('date_end');
  const country = document.getElementById('country');
  const city = document.getElementById('city');
  const address = document.getElementById('address');
  const conditions = document.getElementById('conditions');
  const contacts = document.getElementById('contacts');
  const maxPlayers = document.getElementById('max_players');

  const errorWrapper = createMatchForm.querySelector('.error-wrapper');
  const values = new FormData(createMatchForm);
  const data = Object.fromEntries(values);
  const response = await fetch('/match', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (result.message) {
    errorWrapper.innerHTML = result.message;
  }

  if (result.address) {
    game.value = '';
    date.value = '';
    dateEnd.value = '';
    country.value = '';
    city.value = '';
    address.value = '';
    conditions.value = '';
    contacts.value = '';
    maxPlayers.value = '';
    modalCreateMatch.style.display = 'none';

    // alert('Match created'); // modal push match created

    const resp = await fetch('/match/bysport', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ sport_id: sportid }),
    });
    const res = await resp.json();
    table.innerHTML = `
    <div class="table-row">
    <div class="gridItem">Когда</div>
 <div class="gridItem">Где</div>
 <div class="gridItem">Условия</div>
 <div class="gridItem">Контакты</div>
 <div class="gridItem">Отозвались</div>
 <div class="gridItem">Действия</div>
 </div>
${result.map((el, index) => (`
<div class="table-row" data-matchid="${el.id}">
<div class="table-row__data">
   ${new Date(el.date).toISOString().replace(/T/, ' ').replace(/\..+/, '')
      .slice(5, -3)}
   <br />
   ${new Date(el.date_end).toISOString().replace(/T/, ' ').replace(/\..+/, '')
      .slice(5, -3)}
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
<div class="table-row__data" data-matchcounter="${el.id}">
 ${el.players.length}
 / ${el.max_players}
</div>
<div class="button-wrapper">
${(Number(userId) === Number(el.admin_id)) ? (`
<button class="delete-button table-button">Удалить матч</button>
`) : (`
<button class="join-button table-button">Участвовать</button>
`)}
<button class="cancel-button table-button">Отменить</button>
</div> 
</div>
`)).join('')}`;
    if (result.length === 0) {
      table.innerHTML = `
<div class="table-row">
<div class="gridItem">Когда</div>
<div class="gridItem">Где</div>
<div class="gridItem">Условия</div>
<div class="gridItem">Контакты</div>
<div class="gridItem">Отозвались</div>
<div class="gridItem">Действия</div>
</div>
<div class="table-row">
<p class="nomatch-paragraph">В настоящее время не создано ни одного матча</p>
<button id="nomatch-button" class="nomatch-button">Создать матч</button>
</div>
`;
    }

    // createMatchButton?.addEventListener('click', (event) => {
    //   event.preventDefault();
    //   document.getElementById('createMatchLink').click();
    // });

    slider.style.display = 'none';
    table.style.display = 'flex';
    tableHeader.style.display = 'flex';
  } else {
    errorWrapper.innerHTML = res.message;
  }
});
