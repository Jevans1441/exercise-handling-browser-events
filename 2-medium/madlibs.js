const animalClass = document.querySelector(".animal");
const countryClass = document.querySelector(".country");
const foodClass = document.querySelector(".food");
const nounClass = document.querySelector(".noun");
const adjectiveClass = document.querySelector(".adjective");
const deviceClass = document.querySelector(".device");
const pluralNounClass = document.querySelector(".pluralNoun");

const form = document.querySelector("#madLibForm");
let story = document.getElementById("madLibStory");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //displays story
  story.style.display = "block";

  //input for animalClass
  let animalInput = document.getElementById("animal").value;
  animalClass.innerText = animalInput;

  //input for countryClass
  let countryInput = document.getElementById("country").value;
  countryClass.innerText = countryInput;

  //input for pluralNounClass
  let pluralNounInput = document.getElementById("pluralNoun").value;
  pluralNounClass.innerText = pluralNounInput;

  //device
  let deviceInput = document.getElementById("device").value;
  deviceClass.innerText = deviceInput;

  //food
  let foodInput = document.getElementById("food").value;
  foodClass.innerText = foodInput;

  //noun
  let nounInput = document.getElementById("noun").value;
  nounClass.innerText = nounInput;

  //adjective
  let adjectiveInput = document.getElementById("adjective").value;
  adjectiveClass.innerText = adjectiveInput;
});
