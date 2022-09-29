const content = document.querySelector(".content");
const modale = document.querySelector(".modale");
const form = document.querySelector("form");
const badged = document.querySelector(".badged");

function validate() {
  let data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = "You selected " + entry[1] + " out of 5";
  }

  console.log(output);
  content.style.display = "none";
  modale.style.display = "flex";
  badged.innerHTML = output;
}
