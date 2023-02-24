const profileLink = document.getElementById("user-account");
const profileContainer = document.querySelector(".profile-container");
const profileEntries = document.getElementById("profile-entries");

profileLink?.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    profileContainer.style.display = "flex";
    document.querySelector(".searchbar__wrapper").style.display = "none";
    document.querySelector(".findMatchListner").style.display = "none";
    document.querySelector(".contacts-container").style.display = "none";
    document.querySelector(".tournaments-container").style.display = "none";
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
   ${el.players.length}
  </div>
  </div>
  `
    )
    .join("")}`;
  } catch (error) {
    console.error(error);
  }
});

const editProfile = document.getElementById("editProfile");
const editProfileModal = document.getElementById("modalEditProfile");
const editProfileForm = document.getElementById("editProfileForm");
const profile__left = document.querySelector(".profile__left");

editProfile?.addEventListener("click", (event) => {
  editProfileModal.style.display = "flex";
});

editProfileForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const errorWrapper = editProfileForm.querySelector(".error-wrapper");
  try {
    const values = new FormData(editProfileForm);
    const data = Object.fromEntries(values);
    data.userId = userId;
    const response = await fetch("/user/edit", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.message) {
      errorWrapper.innerHTML = result.message;
    } else {
      profile__left.innerHTML = `
      <div class="profile-data">
        <p class="profile__data-title">Логин</p>
        <p class="profile__data-text">${result?.username}</p>
      </div>
      <div class="profile-data">
        <p class="profile__data-title">Email</p>
        <p class="profile__data-text">${result?.email}</p>

      </div>
      <div class="profile-data">
        <p class="profile__data-title">Телефон</p>
        <p class="profile__data-text">${result?.phoneNumber}</p>
      </div>
      <div class="profile-data">
        <p class="profile__data-title">Пол</p>
        <p class="profile__data-text">${result?.gender}</p>
      </div>
      <div class="profile-data">
        <p class="profile__data-title">Возраст</p>
        <p class="profile__data-text">${result?.age}</p>
      </div>
    `;
    }
    editProfileModal.style.display = "none";
  } catch (error) {
    console.log(error);
  }
});
