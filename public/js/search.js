const inputBox = document.querySelector(".inputbox");
console.log("inputBox", inputBox);

inputBox?.addEventListener("click", async (event) => {
  if (event.target.tagName === "BUTTON") {
    try {
      const sport_id = event.target.dataset.sportid;
      const country = inputBox.children[0].value;
      console.log("country", country);
      const response = await fetch("/match/search", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sport_id, country }),
      });
      const result = await response.json();
      console.log("result", result);
      table.innerHTML = drawTable(result);
    } catch (error) {
      console.log(error);
    }
  }
});
