const inputEl = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputEl.addEventListener('input', () =>
    nameOutput.textContent = inputEl.value.trim() ? inputEl.value : 'Anonymous')