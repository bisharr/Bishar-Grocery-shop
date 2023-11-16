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

// const eyeCloseEl = document.querySelector('.eye-close');
const eyeOpenEl = document.querySelector('.eye-open');
const PasswordInput = document.querySelector('.passward');

// eyeOpenEl.onclick = function () {
//   if (PasswordInput.type == 'password') {
//     PasswordInput.type = 'text';
//     eyeCloseEl.classList.remove('hide');
//     eyeOpenEl.classList.add('hide');
//   } else {
//     PasswordInput.type = 'password';
//     eyeCloseEl.classList.remove('hide');
//   }
// };
eyeOpenEl.onclick = function () {
  if (PasswordInput.type == 'password') {
    // eyeCloseEl.classList.add('hide');
    // eyeOpenEl.classList.remove('hide');
    PasswordInput.type = 'text';
    eyeOpenEl.src = 'eye-icon/eye-close.png';
  } else {
    PasswordInput.type = 'password';
    eyeOpenEl.src = 'eye-icon/eye-open.png';
    console.log(eyeOpenEl.src);
  }
};
const msg = document.getElementById('message');
const str = document.getElementById('strenght');

PasswordInput.addEventListener('input', function () {
  const passwordValue = PasswordInput.value;
  if (passwordValue.length > 0) {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }

  if (passwordValue.length <= 4) {
    str.innerHTML = 'Weak';
    str.style.color = 'Red';
    str.style.background = '#fff';
    str.style.padding = '0.5rem 1rem';
    PasswordInput.style.borderColor = 'red';
  } else if (passwordValue.length > 4 && passwordValue.length <= 8) {
    str.innerHTML = 'Mediuam';
    // str.style.color = '#087f5b';
    str.style.color = 'blue';
    PasswordInput.style.borderColor = 'blue';
    str.style.background = '#fff';
    str.style.padding = '0.5rem 1rem';
  } else if (passwordValue.length >= 8) {
    str.innerHTML = 'Strong';

    str.style.color = 'green';
    PasswordInput.style.borderColor = 'green';
    str.style.background = '#fff';
  }
});
