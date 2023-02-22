const profileLink = document.getElementById('user-account');
const profileContainer = document.querySelector('.profile-container');
const profileEntries = document.getElementById('profile-entries');

profileLink?.addEventListener('click', async (event) => {
  event.preventDefault();
  profileContainer.style.display = 'flex';
  const user_id = profileLink.dataset.userid;
  const response = await fetch('/profile', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ user_id }),
  });
  const result = await response.json();
});
