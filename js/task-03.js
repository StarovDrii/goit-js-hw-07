const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
input.addEventListener('input', () => {
  const inputValue = input.value.trim();
  console.log(inputValue);
  span.textContent = inputValue ? inputValue : 'Anonymous';
});
