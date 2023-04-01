'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const curr0 = document.querySelector('#current--0');
const curr1 = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const new_roll = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');

let temp = 0;
let flag = false;
btn_roll.addEventListener('click', function () {
  // Generate a random dice roll
  const val = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');

  dice.src = `dice-${val}.png`;

  if (val !== 1) {
    temp += val;
    if (!flag) curr0.textContent = temp;
    else curr1.textContent = temp;
  } else {
    if (!flag) {
      curr0.textContent = 0;
    } else {
      curr1.textContent = 0;
    }

    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    flag = !flag;
    temp = 0;
  }
});

btn_hold.addEventListener('click', function () {
  if (!flag) {
    const val = Number(curr0.textContent) + Number(score0.textContent);
    curr0.textContent = 0;
    score0.textContent = val;
    if (val >= 100) {
      alert('Player 1 wins');
    }
  } else {
    const val = Number(curr1.textContent) + Number(score1.textContent);
    curr1.textContent = 0;
    score1.textContent = val;

    if (val >= 100) {
      alert('Player 2 wins');
    }
  }

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  temp = 0;
  flag = !flag;
});

new_roll.addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  curr0.textContent = 0;
  curr1.textContent = 0;
});
