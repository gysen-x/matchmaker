const profileLink = document.getElementById('user-account');
const profileContainer = document.querySelector('.profile-container');
const profileEntries = document.getElementById('profile-entries');

profileLink?.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    profileContainer.style.display = 'flex';
    document.querySelector('.findMatchListner').style.display = 'none';
    document.querySelector('.contacts-container').style.display = 'none';
    document.querySelector('.tournaments-container').style.display = 'none';
    const user_id = profileLink.dataset.userid;
    console.log('user_id', user_id);
    const response = await fetch('/entry/profile', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ user_id }),
    });
    const result = await response.json();
    // const { entryData } = result;
    // console.log("entryData", entryData);
    profileEntries.innerHTML = `
      <div class="table-row">
      <div class="gridItem">Вид спорта</div>
      <div class="gridItem">Когда</div>
      <div class="gridItem">Страна</div>
      <div class="gridItem">Город</div>
      <div class="gridItem">Адрес</div>
      <div class="gridItem">Кол-во игроков</div>
      </div>
  ${result
    .map(
      (el) => `
  <div class="table-row" data-match-id="${el.id}">
  <div class="table-row__data">
     ${el.game}
   </div>
   <div class="table-row__data">
   ${new Date(el.date).toISOString().replace(/T/, ' ').replace(/\..+/, '')
    .slice(5, -3)}
   <br />
   ${new Date(el.date_end).toISOString().replace(/T/, ' ').replace(/\..+/, '')
    .slice(5, -3)}
 </div>
   <div class="table-row__data">
     ${el.country}
   </div>
   <div class="table-row__data">
     ${el.city}
   </div>
   <div class="table-row__data">
     ${el.address}
   </div>
  <div class="table-row__data">
   ${el.players.length}
  </div>
  </div>
  `,
    )
    .join('')}`;
  } catch (error) {
    console.error(error);
  }
});
