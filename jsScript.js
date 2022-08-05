
	// declares selection variable 1st
	var select;

	// then playerSelection function takes in user selection 

function playerSelection(select) {
	select= prompt("Choose ROCK, PAPER, OR SCISSORS").toUpperCase();
	if(select === ``) {
		alert(`please type ROCK, PAPER or SCISSORS`);
		return playerSelection(select);
	}
	else if (select === "ROCK" || select === "PAPER" || select === "SCISSORS") 
	{
		return select;
	}
	else {
		alert(`try again, selection is not valid`);
		return playerSelection(select);
	}
};
//console.log(playerSelection());



	//created getComputerChoice a function that produces a random number 
	//from 0 -2 with each representing an option in Rock Paper scissors
	var randomNum;
function getComputerChoice(randomNum) {
	randomNum = Math.floor(Math.random()* 3);
	switch(randomNum) {
		case 0:
			text = "ROCK";
			break;
		case 1:
			text = "PAPER";
			break;
		case 2:
			text = "SCISSORS";

	} return text;
};
//console.log(getComputerChoice());


function letsPlay(playerSelection, getComputerChoice){
	var userScore;
	var ComputerScore;
	if(playerSelection === getComputerChoice ) {
		userScore = + 1;
		ComputerScore = + 1; 
		console.log(`IT'S A TIE!`);
		console.log(`one point each!`);
	
	}
	else if(playerSelection === "PAPER", getComputerChoice === "ROCK"
	|| playerSelection === "ROCK", getComputerChoice === "SCISSORS" 
	|| playerSelection === "SCISSORS", getComputerChoice === "PAPER")
	{
		userScore = 1;
		ComputerScore = 0;
		console.log(`YOU WIN!`);

	} else if (playerSelection ==="ROCK", getComputerChoice === "PAPER" 
	|| playerSelection === "SCISSORS", getComputerChoice === "ROCK" 
	|| playerSelection === "PAPER", getComputerChoice === "SCISSORS") 
	{
		userScore = 0;
		ComputerScore = + 1; 
		console.log(`YOU LOOSE!`);
		}
		var roundSelectionScore = `you selected ${playerSelection} computer selected ${getComputerChoice}`;
		console.log(roundSelectionScore);
	 };

	//letsPlay () function that plays single round of RPS. 
	// takes two parameters 
	//	playerSelection — case insensitive.
	//  getComputerSelection
	// counter to add 1 point to winner (still need to code)

/* 
function letsPlay(playerSelection, getComputerChoice) {
	let userScore= 0;
	let ComputerScore = 0;
// add one point to winning side need a loop to keep score
	switch (playerSelection, getComputerChoice) 
		{
			case ( "PAPER", "ROCK"):
			case ("ROCK", "SCISSORS"):
			case ( "SCISSORS", "PAPER"):
			console.log("YOU WIN!!");
			break; 
			case ("ROCK", "PAPER"):
			case  ("SCISSORS", "ROCK"):
			case ("PAPER", "SCISSORS"):
			console.log("YOU LOOSE! COMPUTER WINS!");
			break;
			case (playerSelection === getComputerChoice):
			console.log("IT'S A TIE!");
			}
	}; 

	*/

//console.log(playerSelection(select));
//console.log(getComputerChoice(randomNum));
//console.log(letsPlay(playerSelection(select), getComputerChoice(randomNum)));



/*
function game(letsPlay){
 if(n=0; n <5; n++) {
	return letsPlay;
 }
};
*/


/*

later to add with HTML.... 

document.getElementById("selectionOutput").innerHTML =
"You chose" + selection;


*/

