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
    table.innerHTML = drawTable(res.matches);
    currentMatchTable.innerHTML = currentMatchesTable(res.actionMatches);
    currentMatchTable.style.display = 'flex';

    document.querySelector('.searchbar__wrapper').style.display = 'block';
    slider.style.display = 'none';
    table.style.display = 'flex';
    tableHeader.style.display = 'flex';
  } else {
    errorWrapper.innerHTML = res.message;
  }
});
