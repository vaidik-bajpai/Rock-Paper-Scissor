let wins = 0
let loses = 0
let draws = 0
let invalidInput = 0
let winner = 0

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0)
        return "Rock"
    else if(randomNum === 1)
        return "Paper"
    else
        return "Scissor"
}

function getPlayerChoice(){
    let playerChoice = window.prompt("Enter the player's choice! : ", "Rock")
    
    return playerChoice
}

/* console.log(getComputerChoice()) */

function playRound(playerSelection, computerSelection){
    let ps = playerSelection.toUpperCase()
    if(ps !== "ROCK" && ps !== "PAPER" && ps !== "SCISSOR"){
        invalidInput++
        return "Invalid Input"
    }
        
    let cs = computerSelection.toUpperCase()

    if(ps === "ROCK" && cs === "PAPER"){
        loses++
        return "You Lose! Paper beats Rock"
    }
    else if(ps === "PAPER" && cs === "SCISSOR"){
        loses++
        return "You Lose! Scissor beats Paper"
    }
    else if(ps === "SCISSOR" && cs === "ROCK"){
        loses++
        return "You Lose! Rock beats Scissor"
    }
    else if(cs === "ROCK" && ps === "PAPER"){
        wins++
        return "You Won! Paper beats Rock"
    }
    else if(cs === "PAPER" && ps === "SCISSOR"){
        wins++
        return "You Won! Scissor beats Paper"
    }
    else if(cs === "SCISSOR" && ps === "ROCK"){
        wins++
        return "You Won! Rock beats Scissor"
    }
    else if(ps == cs){
        draws++
        return "It's a Draw"
    }
    invalidInput++;
    return "Invalid Choice"
}

/* const playerSelection = "rock"
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection)) */

function game(){
    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }       
    console.log(`
    Wins: ${wins}
    Loses: ${loses}
    Draws: ${draws}
    Invalid: ${invalidInput}`)
}

game()

winner = (wins - loses)
if(winner < 0) console.log("You Lose!")
else console.log("Tou Won!")
