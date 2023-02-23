const modalConfirm = document.getElementById('modalConfirm');

table?.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains('delete-button')) {
    const match_id = event.target.closest('.table-row').dataset.matchid;
    const response = await fetch('/match', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ match_id, admin_id: userId }),
    });
    const result = await response.json();
    console.log('result: ', result);
    event.target.closest('.table-row').remove();
  }
  if (event.target.classList.contains('cancel-button')) {
    const match_id = event.target.closest('.table-row').dataset.matchid;
    const response = await fetch('/entry', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ match_id, user_id: userId }),
    });
    const result = await response.json();
    console.log('result: ', result);
    if (result.message === 'Entry and Match has been deleted') {
      event.target.closest('.table-row').remove();
    } else if (result.message === 'You didnt book here') {
      alert(result.message);
    } else {
      const counterCell = event.target.closest('.table-row').querySelector(`[data-matchcounter="${match_id}"]`);
      console.log('counterCell: ', counterCell.innerText.split('/'));
      const counter = counterCell.innerText;
      counterCell.innerText = `${Number(counter.split('/')[0]) - 1} / ${counter.split('/')[1]}`;
      console.log('counterCell: ', counterCell.innerText.split('/'));
    }
  }

  if (event.target.classList.contains('join-button')) {
    modalConfirm.querySelector('.join-button').dataset.matchid = event.target.closest('.table-row').dataset.matchid;
    modalConfirm.querySelector('.join-button').dataset.userid = document.getElementById('user-account').dataset.userid;
    modalConfirm.style.display = 'flex';
  }
});

modalConfirm?.addEventListener('click', async (event) => {
  if (event.target.classList.contains('cancel-button')) {
    modalConfirm.style.display = 'none';
  }
  if (event.target.classList.contains('join-button')) {
    // alert(`userId: ${event.target.dataset.userid}, matchId: ${event.target.dataset.matchid}`);
    const user_id = event.target.dataset.userid;
    const match_id = event.target.dataset.matchid;
    try {
      const response = await fetch('/entry', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ user_id, match_id }),
      });
      const result = await response.json();
      if (result.message === 'You already booked here') {
        modalConfirm.style.display = 'none';
        alert(result.message);
      }
      if (result.message === 'All places are booked') {
        modalConfirm.style.display = 'none';
        alert(result.message);
      }
      if (!result.message) {
        modalConfirm.style.display = 'none';
        alert('Приятной игры!');
        const matchPlayersBox = table.querySelector(`[data-matchid="${match_id}"]`).querySelector('[data-matchcounter]');
        const matchPlayers = matchPlayersBox.textContent.split('/');
        matchPlayersBox.innerText = `${Number(matchPlayers[0]) + 1} / ${matchPlayers[1]}`;
      }
    } catch (error) {
      console.log(error);
    }
  }
});

// userId
// matchId

/* <button class="delete-button">Удалить матч</button>
`) : (`
<button class="join-button">Принять участие</button>
`)}
<button class="cancel-button">Отменить</button>
</div>  */
