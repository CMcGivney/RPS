//game rules player1 chooses rock, paper or scissors
// display player1 choice and compChoice to DOM
// computer picks random
// compare two choices and decide winner game resets,
// create gameboard to save wins loses, and draws for player1

var userChoice, compChoice;

init();
main();

function main() {
  rock.addEventListener('click', function() {
    userChoice = "rock"
    getsCompChoice();
    game(userChoice, compChoice);
    document.getElementById('userChoice').src =  userChoice + '.jpg';
    document.getElementById('compChoice').src = compChoice + '.jpg';
  })
  paper.addEventListener('click', function() {
    userChoice = "paper"
    getsCompChoice();
    game(userChoice, compChoice); 
    document.getElementById('userChoice').src =  userChoice + '.jpg';
    document.getElementById('compChoice').src = compChoice + '.jpg';
  })
  scissors.addEventListener('click', function() {
    userChoice = "scissors"
    getsCompChoice();
    game(userChoice, compChoice);
    document.getElementById('userChoice').src =  userChoice + '.jpg';
    document.getElementById('compChoice').src = compChoice + '.jpg';
  })
  
}


function game(userChoice, compChoice) {
  switch (userChoice + compChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
    document.querySelector('#boardResult').textContent = "YOU WIN!!"
    scores[0] = scores[0] + 1
    document.querySelector('#usersScore').textContent = scores[0]
    break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
    document.querySelector('#boardResult').textContent = "YOU LOSE!!"
    scores[1] = scores[1] + 1
    document.querySelector('#compScore').textContent = scores[1]
    break;
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
    document.querySelector('#boardResult').textContent = "DRAW PLAY AGAIN!!"
    scores[2] = scores[2] + 1
    document.querySelector('#gameDraw').textContent = scores[2] 
    break;
  }
}

document.querySelector('.btn-new').addEventListener('click', init );

function init() {
  scores = [0, 0, 0];
  document.querySelector('#boardResult').textContent = "Welcome to JavaScript Paper, Rock, Scissors!"
  document.getElementById('userChoice').src = 'rock-paper-scissor-ft.jpg'
  document.getElementById('compChoice').src = 'rock-paper-scissor-ft.jpg'
  document.getElementById('usersScore').textContent = '0';
  document.getElementById('compScore').textContent = '0';
  document.getElementById('gameDraw').textContent = '0';
}

 //gets compChoice random
 function getsCompChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * 3);
  compChoice = choices[randomNumber];
}