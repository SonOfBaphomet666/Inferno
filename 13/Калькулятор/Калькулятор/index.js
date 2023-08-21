

const inputANode = document.querySelector('.js-input-a');
const inputbNode = document.querySelector('.js-input-b');
const select0perationNode = document.querySelector('.js-select-operation');
const btnResultNode = document.querySelector('.js-btn-result');
const outputANode = document.querySelector('.js-output');

btnResultNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputbNode.value);
    const operation = select0perationNode.value;
    const result = calculate({ a, b, operation});
        outputANode.innerHTML = result;
    });
