const { createMatchForm } = document.forms;

createMatchForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const values = new FormData(createMatchForm);
  const data = Object.fromEntries(values);
  const response = await fetch('/match', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);
  if (result.address) {
    modalCreateMatch.style.display = 'none';
    alert('Match created'); //modal push match created
  } else {
    alert(result.message); 
  }
});
