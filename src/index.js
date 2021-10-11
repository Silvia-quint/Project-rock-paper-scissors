const gameOptions = ["rock", "paper", "scissors"];

/* RESULT OPTIONS - Player point of view:
    0-0  - rock-rock - => Tie
    0-1  - rock-paper - => loose
    0-2  - rock-scissors - => win
    
    1-0  - paper-rock - => win
    1-1  - paper-paper - => Tie
    1-2  - paper-scissors - => loose
    
    2-0  - scissors-rock - => loose
    2-1  - scissors-paper - => win
    2-2  - scissors-scissors - => Tie
*/

const getRandomNumber = () => Math.floor(Math.random() * gameOptions.length);

const cpuChoice = getRandomNumber();
const playerChoice = getRandomNumber();
console.log(cpuChoice, playerChoice);

console.log("Player option: " + gameOptions[playerChoice]);
console.log("Cpu option: " + gameOptions[cpuChoice]);


function checkWinner(playerChoice, cpuChoice) {
    //Value WIN Options
    if ((playerChoice === 0 && cpuChoice === 2) ||
    (playerChoice === 1 && cpuChoice === 0) ||
    (playerChoice === 2 && cpuChoice === 1)){
        return "Player WIN";
    }

    //Value LOOSE Options
    else if ((playerChoice === 0 && cpuChoice === 1) ||
    (playerChoice === 1 && cpuChoice === 2) ||
    (playerChoice === 2 && cpuChoice === 0)){
        return "Player LOOSE";
    }

    //Value TIE Option
    else if (playerChoice === cpuChoice) {
        return "TIE";
    }
}

const result = checkWinner(playerChoice, cpuChoice);
console.log("Game result: " + result);