let inputField = document.getElementById("text");
let btn = document.getElementById("convert-btn");

let camel = document.getElementById("camel-case");
let pascal = document.getElementById("pascal-case");
let snake = document.getElementById("snake-case");
let screaming = document.getElementById("screaming-snake-case");
let kebab = document.getElementById("kebab-case");
let screamingkebab = document.getElementById("screaming-kebab-case");

btn.addEventListener("click", () => {
  camel.textContent = toCamel(inputField.value);
  pascal.textContent = toPascal(inputField.value);
  snake.textContent = toSnake(inputField.value);
  ṣ;
  screaming.textContent = toScreamSnake(inputField.value);
  kebab.textContent = toKebab(inputField.value);
  screamingkebab.textContent = toScreamKebab(inputField.value);
});

function toCamel(sentence) {
  let sallu = sentence
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)));

  console.log(sallu);
  return sallu[0].toLowerCase().concat(sallu.slice(1));
}
function toPascal(sentance) {
  return sentance
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join("");
}

function toSnake(sentance) {
  let split_sentance = sentance.split("");

  return split_sentance.map((word) => (word === " " ? "_" : word)).join("");

  // (split_sentance);
}
function toScreamSnake(sentance) {
  // let scrsnake = sentance
  //   .split(" ")
  //   .map((word) => "_".concat(word))
  //   .join("");
  // return scrsnake.replace("_", "").toUpperCase();
  let split_sentance = sentance.split("");
  return split_sentance
    .map((word) => (word === " " ? "_" : word))
    .join("")
    .toUpperCase();
}
function toKebab(sentance) {
  let kebab = sentance
    .split(" ")
    .map((word) => "-".concat(word))
    .join("");
  return kebab.replace("-", "");
}
function toScreamKebab(sentance) {
  let scrkebab = sentance
    .split(" ")
    .map((word) => "-".concat(word))
    .join("");
  return scrkebab.replace("-", "").toUpperCase();
}
