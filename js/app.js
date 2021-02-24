let inputAdd = document.querySelector('.btn-light');
let block = document.querySelector('.block-inputs');
// console.dir(block);

inputAdd.addEventListener('click', function () {
  let input = this.closest('form').querySelector('.input-group-mb-3');
  let cloneInput = input.cloneNode(true);
  block.appendChild(cloneInput);
  cloneInput.querySelector('input').value = "";
});

let inputRemove = document.querySelector('form');
inputRemove.addEventListener('click', function (event) {
  let target = event.target;
  if (target.classList.contains('btn-outline-secondary')) {
    let row = target.closest('.input-group-mb-3');
    block.removeChild(row);
  }
});

let input = document.querySelector('.form-control');
let submit = document.querySelector('.btn-primary');
// console.dir(input);
// console.dir(submit);
submit.addEventListener('click', function (event) {
  event.preventDefault();
  let block = document.querySelector('.block-inputs').children;
  console.log(block.length);
  let musInput = [];
  for (let i = 0; i < block.length; i++) {
    //console.log(block[i]);
    let imputValue = block[i].querySelector('.form-control').value;
    musInput.push(imputValue);
  }
  console.log(musInput);
})
