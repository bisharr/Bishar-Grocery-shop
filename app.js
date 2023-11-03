'use strict';
const btnClickEl = document.querySelector('.clickBtn');
const btnlessEl = document.querySelector('.btnless');
const hidingPricesEl = document.querySelector('.hiding-prices');

const feuturingEl = function () {
  hidingPricesEl.classList.toggle('hide');
  btnlessEl.classList.remove('hide');
  btnClickEl.classList.add('hide');
};
const btnless2 = function () {
  hidingPricesEl.classList.toggle('hide');
  btnlessEl.classList.add('hide');
  btnClickEl.classList.remove('hide');
};

btnClickEl.addEventListener('click', feuturingEl);

btnlessEl.addEventListener('click', btnless2);

const eyeEl = document.querySelector('.eye');
const PasswordInput = document.querySelector('.passward');

eyeEl.addEventListener('click', function () {
  const passwordvalue = PasswordInput.value;
});
