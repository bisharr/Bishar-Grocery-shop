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

const eyeCloseEl = document.querySelector('.eye-close');
const eyeOpenEl = document.querySelector('.eye-open');
const PasswordInput = document.querySelector('.passward');

eyeOpenEl.onclick = function () {
  if (PasswordInput.type == 'password') {
    PasswordInput.type = 'text';
    eyeCloseEl.classList.remove('hide');
    eyeOpenEl.classList.add('hide');
  } else {
    PasswordInput.type = 'password';
    eyeCloseEl.classList.remove('hide');
  }
};
eyeCloseEl.onclick = function () {
  if (PasswordInput.type == 'text') {
    eyeCloseEl.classList.add('hide');
    eyeOpenEl.classList.remove('hide');
    PasswordInput.type = 'password';
  } else {
    PasswordInput.type = 'text';
  }
};
