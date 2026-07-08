'use strict';

const palyer0El = document.getElementsByClassName('player--0');
const palyer1El = document.getElementsByClassName('player--1');

const scoreP0 = document.getElementById('score--0');
const scoreP1 = document.getElementById('score--1');

const currentScoreP0 = document.getElementById('current--0');
const currentScoreP1 = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

let scores, activePlayer, currentScore, playable;

const resetGame = function () {
  dice.classList.add('hidden');

  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playable = true;

  scoreP0.textContent = 0;
  scoreP1.textContent = 0;
  currentScoreP0.textContent = 0;
  currentScoreP1.textContent = 0;

  palyer0El[0].classList.add('player--active');
  palyer1El[0].classList.remove('player--active');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
};

resetGame();

const resetPlayerTurn = function () {
  currentScore = 0;
  setCurrentScore(currentScore);
  activePlayer = activePlayer === 0 ? 1 : 0;
  palyer0El[0].classList.toggle('player--active');
  palyer1El[0].classList.toggle('player--active');
};

function setCurrentScore(givenScore) {
  document.querySelector(`#current--${activePlayer}`).textContent = givenScore;
}

function setTotalScore(givenScore) {
  document.querySelector(`#score--${activePlayer}`).textContent = givenScore;
}

rollDiceBtn.addEventListener('click', function () {
  if (playable) {
    let diceScore = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove('hidden');
    dice.src = `dice-${diceScore}.png`;

    if (diceScore !== 1) {
      currentScore += diceScore;
      setCurrentScore(currentScore);
    } else {
      resetPlayerTurn();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playable) {
    scores[activePlayer] += currentScore;
    currentScore = 0;
    setTotalScore(scores[activePlayer]);
    setCurrentScore(currentScore);

    if (scores[activePlayer] < 100) {
      resetPlayerTurn();
    } else {
      playable = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    }
  }
});

newGameBtn.addEventListener('click', resetGame);
