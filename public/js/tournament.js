const tournamentLink = document.getElementById('champLink');
const tournamentList = document.querySelector('.tournamentList');
const tournamentContainer = document.getElementById('tournaments-container');

tournamentLink?.addEventListener('click', (event) => {
  event.preventDefault();
  tournamentContainer.style.display = 'flex';
  document.querySelector('.findMatchListner').style.display = 'none';
  document.querySelector('.profile-container').style.display = 'none';
  tournamentList.innerHTML = `
  <li className="tournament__item">
            <div className="tournament__column">
              <p className="tournament__text">Название турнира</p>
              <p className="tournament__text">Количество участников</p>
            </div>
            <div className="tournament__column">
              <p className="tournament__text">Организатор</p>
              <p className="tournament__text">Условия</p>
            </div>
            <div className="tournament__column tournament__buttons">
              <button type="button" className="tournament__button">Участвовать</button>
              <button type="button" className="tournament__button">Покинуть</button>
            </div>
          </li>
`;
});
