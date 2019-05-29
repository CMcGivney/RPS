var usersChoice;
var compChoice; 
var userScore = 0;
var compScore = 0;
var userScoreSpan = document.getElementById("userScore");
var compScoreSpan = document.getElementById("compScore");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

// var choice = document.getElementsByClassName("choice");
// for(var i = 0; i < choice.length; i++) {
//   choice[i].addEventListener("click", function() {
//     usersChoice = this.id
    
//     })
//   }

function getsCompChoice() {
var choices = ["rock", "paper", "scissors"];
var randomNumber = options[Math.floor(Math.random() * 3)];
return choices[randomNumber];
} 

function main(usersChoice) {
var comChoice = getsCompChoice()
switch (usersChoice + comChoice) {
case "rock scissors":
case "scissors paper":
case "paper rock":
console.log( "You Win!" )
break;
case "scissors rock":
case "paper scissors":
case "rock paper":
console.log("You lose!")
break;
case "rock rock":
case "scissors scissors":
case "paper paper":
console.log("Draw, Play again.")
break;
  }
}
function game() {
  console.log(usersChoice)
}


function userPick() {
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

userPick();
