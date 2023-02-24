const contactsLink = document.getElementById("contactsLink");
const contactsContainer = document.querySelector(".contacts-container");
const contactsMap = document.getElementById("contactsMap");
const { contactsForm } = document.forms;
console.log(contactsForm);

contactsLink?.addEventListener("click", (event) => {
  event.preventDefault();
  contactsContainer.style.display = "flex";
  document.querySelector(".findMatchListner").style.display = "none";
  document.querySelector(".profile-container").style.display = "none";
  document.querySelector(".tournaments-container").style.display = "none";
  contactsMap.innerHTML = `
  <iframe 
  class="contacts__iframe"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.0318659406785!2d115.16955841474784!3d-8.783072093691697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2457a553cdbbb%3A0x3f13c632bed794ab!2sKandel%20Villa!5e0!3m2!1sru!2sid!4v1677090062283!5m2!1sru!2sid"
      allowfullscreen=""
       loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        `;
});

contactsForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const values = new FormData(contactsForm);
    const data = Object.fromEntries(values);
    console.log(data);
    const response = await fetch("/contacts/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.message) {
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
  }
});
