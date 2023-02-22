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
    } else {
      const counterCell = event.target.closest('.table-row').querySelector(`[data-matchcounter="${match_id}"]`);
      console.log('counterCell: ', counterCell.innerText.split('/'));
      const counter = counterCell.innerText;
      counterCell.innerText = `${Number(counter.split('/')[0]) - 1} / ${counter.split('/')[1]}`;
      console.log('counterCell: ', counterCell.innerText.split('/'));
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
