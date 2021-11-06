const animalClass = document.querySelector(".animal");
const countrySpan = document.querySelectorAll(".country");
const foodClass = document.querySelector(".food");
const nounClass = document.querySelector(".noun");
const adjectiveSpan = document.querySelectorAll(".adjective");
const deviceSpan = document.querySelectorAll(".device");
const pluralNounClass = document.querySelector(".pluralNoun");

const form = document.querySelector("#madLibForm");
let story = document.getElementById("madLibStory");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //displays story
  story.style.display = "block";

  //animal
  let animalInput = document.getElementById("animal").value;
  animalClass.style.color = "blue";
  animalClass.innerText = animalInput;

  //country
  let countryInput = document.getElementById("country").value;
  for (c = 0; c < countrySpan.length; c++) {
    countrySpan[c].innerText = countryInput;
    countrySpan[c].style.color = "blue";
  }

  //pluralNoun
  let pluralNounInput = document.getElementById("pluralNoun").value;
  pluralNounClass.style.color = "blue";
  pluralNounClass.innerText = pluralNounInput;

  //device
  let deviceInput = document.getElementById("device").value;
  for (let d = 0; d < deviceSpan.length; d++) {
    deviceSpan[d].innerText = deviceInput;
    deviceSpan[d].style.color = "blue";
  }

  //food
  let foodInput = document.getElementById("food").value;
  foodClass.style.color = "blue";
  foodClass.innerText = foodInput;

  //noun
  let nounInput = document.getElementById("noun").value;
  nounClass.style.color = "blue";
  nounClass.innerText = nounInput;

  //adjective
  let adjectiveInput = document.getElementById("adjective").value;
  for (let a = 0; a < adjectiveSpan.length; a++) {
    adjectiveSpan[a].innerText = adjectiveInput;
    adjectiveSpan[a].style.color = "blue";
  }
});
