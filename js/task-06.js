function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const initialSize = 30;
  const fragment = document.createElement('div');
  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    boxesContainer.innerHTML = '';
    createBoxes(amount);
    input.value = '';
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
