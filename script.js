let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}
const compareGuesses = (human, computer, secret) => {
  let humanDiff = human - secret
  let computerDiff = computer - secret

  return Math.abs(humanDiff) < Math.abs(computerDiff)
}

const updateScore = (winner = '') => {
  if(!winner){
    console.log('error defining winner')
  }
  if(winner == 'human'){
    humanScore++
  } else {
    computerScore++
  }
}

const advanceRound = () => {
  currentRoundNumber++
}
