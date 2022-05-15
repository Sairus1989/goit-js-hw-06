function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const background = document.querySelector('.color');
const btnColor = document.querySelector('.change-color');

btnColor.addEventListener("click", changeColor);

function changeColor(event) {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;

  background.textContent = randomColor;
}
