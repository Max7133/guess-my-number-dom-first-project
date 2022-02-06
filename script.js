'use strict';
/* // this bellow is connected to index.html line 23
// first, I select element with quearySelector (the class name .message (like in CSS)),
// second, On that element I can read the textContent
console.log(document.querySelector('.message').textContent);
// set content of element
document.querySelector('.message').textContent = 'Correct Number!';
// changing number
document.querySelector('.number').textContent = 69;
// changing score
document.querySelector('.score').textContent = 69;
// reading value from input
document.querySelector('.guess').value = 69;
console.log(document.querySelector('.guess').value); */

////73 video
// 1. selected the button by class "check"
// 2. added event listener method to that element "check"
// 3. attached function that handles the even
// 4. trunk removes decimal numbers
//Secret Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // if no value is entered, it will show the message No Number !!!!!
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!!!!!';
    displayMessage('No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    //the css style is backround-color, but in JS only camelCase allowed thats why backgroundColor
    document.querySelector('body').style.backgroundColor = '#60b347';
    //setting the table width
    document.querySelector('.number').style.width = '30rem';
    // Highscore set
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      console.log(score);
      console.log(highscore);
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /*  document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High!' : 'Too Low!'; */
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      // takes one point away from the score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('GAME OVER !!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
