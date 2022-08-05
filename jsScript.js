
	// declares selection variable 1st
	let select;

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

function getComputerChoice () {
var randomNum = Math.floor(Math.random()* 3);
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


	//letsPlay () function that plays single round of RPS. 
	// takes two parameters 
	//	playerSelection — case insensitive.
	//  getComputerSelection
	// counter to add 1 point to winner (still need to code)

function letsPlay(playerSelection, getComputerCode) {
// add one point to winning side need a loop to keep score
	switch (playerSelection, getComputerCode) 
		{
			case (`PAPER`,`ROCK`):
			case (`ROCK`,`SCISSORS`):
			case (`SCISSORS`,`PAPER`):
			result = `YOU WIN!!`;
			console.log(`you win!`);
			break; 
			case (`ROCK`,`PAPER`):
			case (`SCISSORS`, `ROCK`):
			case (`PAPER`,`SCISSORS`):
			result = `YOU LOOSE! COMPUTER WINS!`;
			console.log(`you loose`)
			break;
			default:
			result = `it's a tie`;
			console.log(`you tie`);
			}
	}; 

//console.log(playerSelection(select));
//console.log(getComputerChoice());
//console.log(letsPlay(playerSelection, getComputerChoice));






/*

later to add with HTML.... 

document.getElementById("selectionOutput").innerHTML =
"You chose" + selection;


*/

