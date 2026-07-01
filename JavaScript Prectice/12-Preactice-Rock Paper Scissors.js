let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};
updateScoreElement();
/*
if (score===null) {
  score ={
    wins:0,
    loses:0,
    ties:0
  };
}
  */
let isAutoPlaying = false;
let intervalId;


//12-S-Solution: 
document.querySelector('.js-auto-btn')
  .addEventListener('click', () => {
    autoPlay();
  });


function autoPlay() {
  let autoPlaybtn = document.querySelector('.auto-btn');
  if (!isAutoPlaying) {
    //12T-Solution:
    autoPlaybtn.innerHTML = 'Stop play'
    intervalId = setInterval(() => {
      const playerChoice = pickComputerMove();
      playGame(playerChoice);
    }, 1000);
    isAutoPlaying = true;
  }
  else {
    autoPlaybtn.innerHTML = 'Auto play'
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

document.querySelector('.js-rock-btn')
  .addEventListener('click', () => {
    playGame('rock');
  })
document.querySelector('.js-paper-btn')
  .addEventListener('click', () => {
    playGame('paper');
  })
document.querySelector('.js-scissors-btn')
  .addEventListener('click', () => {
    playGame('scissors');
  })
document.body.addEventListener('keydown', (event) => {    //event is for take /check which key inshort
  if (event.key === 'r') {
    playGame('rock');
  }
  else if (event.key === 'p') {
    playGame('paper');
  }
  else if (event.key === 's') {
    playGame('scissors');
  }
  else if (event.key === 'a') {
    autoPlay();
  }
  else if (event.key === 'Backspace') {
    showResetConformation();
    // resetScore();
  }
})


function playGame(playerChoice) {
  const computerChoice = pickComputerMove()
  let result = '';

  if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      result = 'You lose!';
    }
    else if (computerChoice === 'paper') {
      result = 'You win!';
    }
    else if (computerChoice === 'scissors') {
      result = 'Tie';
    }
    else {
      console.log('Error: Invalid computer choice');
    }
  }

  else if (playerChoice === 'rock') {
    if (computerChoice === 'rock') {
      result = 'Tie!';
    }
    else if (computerChoice === 'paper') {
      result = 'You lose!';
    }
    else if (computerChoice === 'scissors') {
      result = 'You win!';
    }
    else {
      console.log('Error: Invalid computer choice');
    }

  }

  else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      result = 'You win!';
    }
    else if (computerChoice === 'paper') {
      result = 'Tie!';
    }
    else if (computerChoice === 'scissors') {
      result = 'You lose!';
    }
    else {
      console.log('Error: Invalid computer choice');
    }
  }

  if (result === 'You win!') {
    score.wins += 1;
  }
  else if (result === 'You lose!') {
    score.loses += 1;
  }
  else if (result === 'Tie!') {
    score.ties += 1;
  }

  updateScoreElement();
  document.querySelector('.js-show-result').innerHTML
    = result;

  document.querySelector('.js-result').innerHTML
    = result;

  document.querySelector('.js-result').innerHTML
    = `You <img class="hand-move" src="https://github.com/SuperSimpleDev/javascript-course/blob/main/2-copy-of-code/images/${playerChoice}-emoji.png?raw=true" alt="rock">
  <img class="hand-move" src="https://github.com/SuperSimpleDev/javascript-course/blob/main/2-copy-of-code/images/${computerChoice}-emoji.png?raw=true" alt="rock">
  computer`;


  localStorage.setItem('score', JSON.stringify(score));
  // alert(`You pick : ${playerChoice}\nComputer Choice: ${computerChoice}\nResult: ${result}\nscore: wins:${score.wins} loses:${score.loses} Ties:${score.ties}`);
}
function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `wins:${score.wins} loses:${score.loses} Ties:${score.ties}`
}

function pickComputerMove() {
  let computerChoice = '';

  const randomChoice = Math.random();

  if (randomChoice >= 0 && randomChoice < 0.33) {
    computerChoice = 'rock';
  }
  else if (randomChoice >= 0.33 && randomChoice < 0.66) {
    computerChoice = 'paper';
  }

  else if (randomChoice >= 0.66 && randomChoice <= 1) {
    computerChoice = 'scissors';
  }
  else {
    console.log('Error: Invalid random number');
  }
  // console.log('Computer choice:', computerChoice);
  return computerChoice;
}

document.querySelector('.js-reset-btn')
  .addEventListener('click', () => {
    showResetConformation();
  })

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  console.log('Reset Score');
  updateScoreElement();
  showResetConformation();
}

function showResetConformation() {
  document.querySelector('.conformation-msg')
    .innerHTML = `Are you sure you want to rest the score?
  <button class="js-yes-btn yes-btn">Yes</button>
  <button class="js-no-btn no-btn">No</button>
  `;

document.querySelector('.js-yes-btn')
  .addEventListener('click', () => {
    resetScore();
    hideResetConformation();
  });
document.querySelector('.js-no-btn')
  .addEventListener('click', () => {
    hideResetConformation();
  })


function hideResetConformation() {
  document.querySelector('.conformation-msg').innerHTML='';
}
}
