
//create a function that produces a random number from 0 -2 with each
//representing an option in Rock Paper scissors

function getComputerChoice () {
var randomNum = Math.floor(Math.random()* 3);
	switch(randomNum) {
		case 0:
			text = "ROCK";
			break;
		case 1:
			text = "PAPERS";
			break;
		case 2:
			text = "SCISSORS";

	} return text;
}

console.log(getComputerChoice());



/*
 
SYNTAX: 
	 let functionName = () => {};

______________________________________________________________________

//code with randomNum var and switch statement no function yet

let randomNum = Math.floor(Math.random()* 3);
	switch(randomNum) {
		case 0:
			text = "ROCK";
			break;
		case 1:
			text = "PAPERS";
			break;
		case 2:
			text = "SCISSORS";
	} 
console.log(text);

___________________________________________________________________________
//code with randomNum var declared before function
//switch statement in function

var randomNum = Math.floor(Math.random()* 3);
function getComputerChoice (randomNum) {
	switch(randomNum) {
		case 0:
			text = "ROCK";
			break;
		case 1:
			text = "PAPERS";
			break;
		case 2:
			text = "SCISSORS";
	} return text;
}
console.log(getComputerChoice(randomNum));



 */