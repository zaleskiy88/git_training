const btn = document.querySelector(".btn");
const greet = document.querySelector(".greet");
const textInput = document.querySelector("#text-input");
const message = "Hello form script.js!";

btn.addEventListener("click", (e) => {
  onBtnClick(textInput.value);
});

function onBtnClick(message) {
  greet.innerHTML = message;
}
