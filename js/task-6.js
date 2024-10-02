function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls'); 
const input = controls.querySelector('input'); 
const createButton = controls.querySelector('[data-create]'); 
const destroyButton = controls.querySelector('[data-destroy]'); 
const boxesContainer = document.querySelector('#boxes'); 

createButton.addEventListener("click", () => {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();
  createBoxes(amount);
  input.value = ``;
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
  inputvalue = ''
});

function createBoxes(amount) {
  const boses = [];
  for (let i = 0, i < amount; i++)
    const size = 30 + i * 10;
  
}
