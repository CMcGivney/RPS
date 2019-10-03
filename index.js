var userChoice
var compChoice; 
var userScore = 0;
var compScore = 0;
var userScoreSpan = document.getElementById("userScore");
var compScoreSpan = document.getElementById("compScore");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

//game rules player1 chooses rock, paper or scissors
// display player1 choice and compChoice
// computer picks random
// compare two choices and decide winner game resets,
// create gameboard to save wins loses, and draws for player1

main()

function main() {
  rock.addEventListener('click', function() {
    game("rock");
   
  })
  paper.addEventListener('click', function() {
    game("paper");
   
  })
  scissors.addEventListener('click', function() {
    game("scissors");
  })
  
}



function getsCompChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomNumber = Math.floor(Math.random() * 3);
  console.log(choices[randomNumber]);
} 


function game(userChoice) {
  var compChoice = getsCompChoice()
  switch (userChoice + compChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
    console.log( "You Win!" )
    break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
    console.log("You lose!")
    break;
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
    console.log("Draw, Play again.")
    break;
  }
}

// var choice = document.getElementsByClassName("choice");
// for(var i = 0; i < choice.length; i++) {
  //   choice[i].addEventListener("click", function() {
    //     usersChoice = this.id
    
    //     })
    //   }



