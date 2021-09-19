const biggerBtn = document.getElementById("biggerBtn");
const mooBtn = document.getElementById("mooBtn");
const fancy = document.getElementById("fancyShmancy");
const boring = document.getElementById("boringBetty");
let someText = document.getElementById("some-text");
let someTextValue = document.getElementById("some-text").value;
let parts = "";
let lastWord = "";

biggerBtn.addEventListener('click', enlargeText);
mooBtn.addEventListener('click', capsText);
fancy.addEventListener('click', applyBold);
boring.addEventListener('click', removeBold);

function enlargeText() {
  someText.style.fontSize = 1.5 + "em";
}

function capsText() {
  someText.style.textTransform = "uppercase";
  someText.value = someText.value.split(".").join("-Moo.");
  someText.value = someText.value.split("?").join("-Moo?");
  someText.value = someText.value.split("!").join("-Moo!");
}

function applyBold() {
  someText.style.fontWeight = "bold";
  someText.style.color = "blue";
  someText.style.textDecoration = "underline";
}

function removeBold() {
  someText.style.fontWeight = "normal";
  someText.style.color = "black";
  someText.style.textDecoration = "none";
}
