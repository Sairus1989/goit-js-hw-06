const levelInputEl = document.querySelector('#font-size-control');
console.log(levelInputEl);

const text = document.querySelector('#text');
const textContent = text.textContent;
console.log(textContent);

text.style.fontSize = `${levelInputEl.value}px`;

levelInputEl.addEventListener('input', (event) => {
    text.style.fontSize = `${levelInputEl.value}px`;
})


