'use strict';
/*
document.querySelector('.message').textContent = '🌸 Correct Number';

document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 10;
console.log((document.querySelector('.number').textContent = 12));

document.querySelector('.guess').value = 7;
console.log(document.querySelector('.guess').value);
*/

// Generate the hidden number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
console.log('Secrect Number: ', secretNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Compare the hidden number with the user input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score > 1) {
    // When there is no input
    if (!guess) {
      displayMessage('⛔️ No number!');

      // When player wins
    } else if (guess === secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('🎉 Correct Number!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }

      // When guess is too high
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      //   displayMessage('📈 Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // When guess is too low
    // } else if (guess < secretNumber) {
    //   displayMessage('📉 Too Low!');
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }
    //When player loose
  } else {
    displayMessage('💥 You lost the game!');
    score = 0;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  console.log('Secrect Number: ', secretNumber);
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
});
