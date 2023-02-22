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
  console.log("result", result);
  const { entryData } = result;
  console.log("entry_data", entryData[0]);
});
