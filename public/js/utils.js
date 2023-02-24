function drawTable(arr) {
  return arr.length
    ? `
        <div class="table-row">
        <div class="gridItem">Игра</div>
        <div class="gridItem">Когда</div>
        <div class="gridItem">Страна</div>
        <div class="gridItem">Город</div>
     <div class="gridItem">Адрес</div>
     <div class="gridItem">Условия</div>
     <div class="gridItem">Контакты</div>
     <div class="gridItem">Отозвались</div>
     <div class="gridItem">Действия</div>
     </div>
    ${arr
      .map(
        (el, index) => `
    <div class="table-row" data-matchid="${el.id}">
    <div class="table-row__data">
    ${el.game}
    </div>
    <div class="table-row__data">
       ${new Date(el.date)
         .toISOString()
         .replace(/T/, " ")
         .replace(/\..+/, "")
         .slice(5, -3)}
       <br />
       ${new Date(el.date_end)
         .toISOString()
         .replace(/T/, " ")
         .replace(/\..+/, "")
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
    ${
      Number(userId) === Number(el.admin_id)
        ? `
    <button class="delete-button table-button">Удалить матч</button>
    `
        : `
    <button class="join-button table-button">Участвовать</button>
    `
    }
    <button class="cancel-button table-button">Отменить</button>
    </div> 
    </div>
    `
      )
      .join("")}`
    : `
            <div class="table-row">
            <div class="gridItem">Игра</div>
            <div class="gridItem">Когда</div>
            <div class="gridItem">Страна</div>
            <div class="gridItem">Город</div>
            <div class="gridItem">Адрес</div>
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

function currentMatchesTable(arr) {
  return arr.length
    ? `
          <div class="table-row">
          <div class="gridItem">Игра</div>
          <div class="gridItem">Когда</div>
          <div class="gridItem">Страна</div>
          <div class="gridItem">Город</div>
       <div class="gridItem">Адрес</div>
       <div class="gridItem">Условия</div>
       <div class="gridItem">Контакты</div>
       <div class="gridItem">Отозвались</div>
       </div>
      ${arr
        .map(
          (el, index) => `
      <div class="table-row" data-matchid="${el.id}">
      <div class="table-row__data">
      ${el.game}
      </div>
      <div class="table-row__data">
         ${new Date(el.date)
           .toISOString()
           .replace(/T/, " ")
           .replace(/\..+/, "")
           .slice(5, -3)}
         <br />
         ${new Date(el.date_end)
           .toISOString()
           .replace(/T/, " ")
           .replace(/\..+/, "")
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
       ${el.conditions}
      </div>
      <div class="table-row__data">
       ${el.contacts}
      </div>
      <div class="table-row__data" data-matchcounter="${el.id}">
       ${el.players.length}
       / ${el.max_players}
      </div> 
      </div>
      `
        )
        .join("")}`
    : `
              <div class="table-row">
              <div class="gridItem">Игра</div>
              <div class="gridItem">Когда</div>
              <div class="gridItem">Страна</div>
              <div class="gridItem">Город</div>
              <div class="gridItem">Адрес</div>
              <div class="gridItem">Условия</div>
              <div class="gridItem">Контакты</div>
              <div class="gridItem">Отозвались</div>
              </div>
              <div class="table-row">
              <p class="nomatch-paragraph">В настоящее время игры отсуствуют</p>
              </div>
        `;
}
