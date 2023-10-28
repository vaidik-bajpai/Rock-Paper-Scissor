let wins = 5
let loses = 5
let defeatFlag = 1

const rockBtn =  document.getElementById("Rock")
const paperBtn =document.getElementById("Paper")
const scissorBtn = document.getElementById("Scissor")
const resultEl = document.getElementById("result")
const yourHp = document.getElementById("yourHp")
const enemyHp = document.getElementById("enemyHp")

yourHp.textContent = wins
enemyHp.textContent = loses

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0)
        return "Rock"
    else if(randomNum === 1)
        return "Paper"
    else
        return "Scissor"
}

rockBtn.addEventListener("click", function(){
    playRound("Rock", getComputerChoice())
})
paperBtn.addEventListener("click", function(){
    playRound("Paper", getComputerChoice())
})
scissorBtn.addEventListener("click", function(){
    playRound("Scissor", getComputerChoice())
})

function checkDefeat(){
    if(loses === 0) {
        resultEl.textContent = "You have been Slain"
        defeatFlag = true
        
    }
    else if(wins === 0){
        resultEl.textContent = "You have Slain your Enemy"
        defeatFlag = true
    } 
}

function restart(){
    location.reload()
}

function playRound(playerSelection, computerSelection){
    if(defeatFlag === true){
        return;
    }

    let ps = playerSelection.toUpperCase()
    let cs = computerSelection.toUpperCase()
    displayMove(ps, cs)
    if(ps === "ROCK" && cs === "PAPER"){
        loses--
        resultEl.textContent = "You Lose! Paper beats Rock"
        checkDefeat()
        yourHp.textContent = loses
        return
    }
    else if(ps === "PAPER" && cs === "SCISSOR"){
        loses--
        resultEl.textContent = "You Lose! Scissor beats Paper"
        checkDefeat()
        yourHp.textContent = loses
        return
    }
    else if(ps === "SCISSOR" && cs === "ROCK"){
        loses--
        resultEl.textContent = "You Lose! Rock beats Scissor"
        checkDefeat()
        yourHp.textContent = loses
        return
    }
    else if(cs === "ROCK" && ps === "PAPER"){
        wins--
        resultEl.textContent = "You Won! Paper beats Rock"
        checkDefeat()
        enemyHp.textContent = wins
        return
    }
    else if(cs === "PAPER" && ps === "SCISSOR"){
        wins--
        resultEl.textContent = "You Won! Scissor beats Paper"
        checkDefeat()
        enemyHp.textContent = wins
        return
    }
    else if(cs === "SCISSOR" && ps === "ROCK"){
        wins--
        resultEl.textContent = "You Won! Rock beats Scissor"
        checkDefeat()
        enemyHp.textContent = wins
        return
    }
    else if(ps === cs){
        draws++
        resultEl.textContent = "It's a Draw"
        return
    }
}

function displayMove(playerMove, enemyMove){
    const player = document.querySelector('.playersMove')
    const enemy = document.querySelector('.CPUMove')
    if(playerMove.toUpperCase() === "ROCK"){
        player.textContent = "✊"
    }
    else if(playerMove.toUpperCase() === "PAPER"){
        player.textContent= "✋"
    }
    else if(playerMove.toUpperCase() === "SCISSOR"){
        player.textContent = "✌️"
    }
    if(enemyMove.toUpperCase() === "ROCK"){
        enemy.textContent = "✊"
    }
    else if(enemyMove.toUpperCase() === "PAPER"){
        enemy.textContent = "✋"
    }
    else if(enemyMove.toUpperCase() === "SCISSOR"){
        enemy.textContent = "✌️"
    }
}