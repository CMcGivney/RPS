var usersChoice;
var compChoice; 
var userScore = 0;
var compScore = 0;
var userScoreSpan = document.getElementById("userScore");
var compScoreSpan = document.getElementById("compScore");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");



function getsCompChoice() {
var options = ["rock", "paper", "scissors"];
var randomNumber = options[Math.floor(Math.random() * 3)];
return options[randomNumber];
} 

function games(usersChoice) {
var comChoice = getsCompChoice()
switch (userChoice + comChoice) {
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

function play() {
rock.addEventListener('click', function() {
games("rock");
})
paper.addEventListener('click', function() {
games("paper");
})
scissors.addEventListener('click', function() {
games("scissors");
})

}

play();
// document.getElementById("compChoice").src = compChoice


  


// display choices
// figure out winner
// switch (userschoice)








// back up plan for game
// var rock = document.getElementById("rock")
// var paper = document.getElementById("paper")
// var scissors = document.getElementById("scissors")
// rock.addEventListener("click", usersChoice);
// console.log(usersChoice)
// paper.addEventListener("click", usersChoice);
// scissors.addEventListener("click", usersChoice);


// var choice = document.getElementsByClassName("choice");
// for(var i = 0; i < choice.length; i++) {
//   choice[i].addEventListener("click", function() {
//     usersChoice = this.id
//     console.log(usersChoice)
//     document.getElementById("usersChoice").src = usersChoice;
//     debugger
//   });
// get the comp choice





 
    
