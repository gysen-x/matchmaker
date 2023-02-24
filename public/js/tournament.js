const tournamentLink = document.getElementById('champLink');
const tournamentList = document.getElementById('tournamentList');
const tournamentContainer = document.querySelector('.tournaments-container');

tournamentLink?.addEventListener('click', (event) => {
  event.preventDefault();
  tournamentContainer.style.display = 'flex';
  document.querySelector('.findMatchListner').style.display = 'none';
  document.querySelector('.profile-container').style.display = 'none';
  document.querySelector('.contacts-container').style.display = 'none';
  tournamentList.innerHTML = `
  <li class="tournament__item">
            <div class="tournament__column">
              <p class="tournament__label">Название турнира</p>
              <p class="tournament__text">Cуперкубок</p>
            </div>
            <div class="tournament__column">
              <p class="tournament__label">Организатор</p>
              <p class="tournament__text">Алексей</p>
            </div>
            <div class="tournament__column">
            <p class="tournament__label">Количество игроков</p>
            <p class="tournament__text">8/14</p>
          </div>
          <div class="tournament__column">
          <p class="tournament__label">Условия</p>
          <p class="tournament__text">300р/человек</p>
        </div>
            <div class="tournament__column tournament__buttons">
              <button type="button" class="tournament__button">Участвовать</button>
              <button type="button" class="tournament__button">Покинуть</button>
            </div>
          </li>
          <li class="tournament__item">
          <div class="tournament__column">
            <p class="tournament__label">Название турнира</p>
            <p class="tournament__text">Дружеский матч</p>
          </div>
          <div class="tournament__column">
            <p class="tournament__label">Организатор</p>
            <p class="tournament__text">Алексей</p>
          </div>
          <div class="tournament__column">
          <p class="tournament__label">Количество игроков</p>
          <p class="tournament__text">8/14</p>
        </div>
        <div class="tournament__column">
        <p class="tournament__label">Условия</p>
        <p class="tournament__text">бесплатно</p>
      </div>
          <div class="tournament__column tournament__buttons">
            <button type="button" class="tournament__button">Участвовать</button>
            <button type="button" class="tournament__button">Покинуть</button>
          </div>
        </li>
`;
});
