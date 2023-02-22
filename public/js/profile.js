const profileLink = document.getElementById("user-account");
console.log("profileLink", profileLink);
const profileContainer = document.querySelector(".profile-container");
console.log("profileContainer", profileContainer);
const profileEntries = document.getElementById("profile-entries");

profileLink?.addEventListener("click", async (event) => {
  event.preventDefault();
  profileContainer.style.display = "flex";
  profileContainer.nextSibling.style.display = "none";
  const user_id = profileLink.dataset.userid;
  console.log("user_id", user_id);
  const response = await fetch("/entry/profile", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ user_id }),
  });
  const result = await response.json();
  // const { entryData } = result;
  // console.log("entryData", entryData);
  profileEntries.innerHTML = `
    <div class="table-row">
    <div class="gridItem">Когда</div>
 <div class="gridItem">Где</div>
 <div class="gridItem">Условия участия</div>
 <div class="gridItem">Контакты</div>
 <div class="gridItem">Отозвались</div>
 <div class="gridItem">Действия</div>
 </div>
${result
  .map(
    (el) => `
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
<button>Удалить матч</button>
<button>Отменить</button>
</div> 
`
  )
  .join("")}`;
});
