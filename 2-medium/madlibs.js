const animalClass = document.querySelector(".animal");
const form = document.querySelector("#madLibForm");
let story = document.getElementById("madLibStory");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  //displays story
  story.style.display = "block";
  let input = document.getElementById("animal").value;
  animalClass.innerText = input;
});
