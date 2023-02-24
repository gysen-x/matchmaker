const inputBox = document.querySelector(".searchbar__wrapper");

inputBox?.addEventListener("click", async (event) => {
  if (event.target.tagName === "BUTTON") {
    try {
      const sport_id = event.target.dataset.sportid;
      const country = inputBox.children[0].children[0].value;
      const response = await fetch("/match/search", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sport_id, country }),
      });
      const result = await response.json();
      table.innerHTML = drawTable(result);
      inputBox.children[0].children[0].value = "";
    } catch (error) {
      console.log(error);
    }
  }
});
