let userScore = 0
let compScore = 0

let choices = document.querySelectorAll('.choice')
let msg = document.querySelector('#msg')
let userScorePara = document.querySelector('#user-score')
let compScorePara = document.querySelector('#comp-score')

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const rendIdx = Math.floor(Math.random() * 3)
    return options[rendIdx]
}

const drawGame = () => {
    // console.log('Game was draw')
    msg.innerText = `Match Was Draw!`
    msg.style.backgroundColor = '#081b31'
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore
        // console.log(`You Win!`)
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
    }else{
        compScore++
        compScorePara.innerText = compScore
        // console.log(`You Lose!`)
        msg.innerText = `You Lose! ${compChoice} beats  your ${userChoice}`
        msg.style.backgroundColor = 'red'
    } 
} 

let playGame = (userChoice) => {
//    console.log('User Choice', userChoice)
   //Generate computer choice
   const compChoice = genCompChoice()
//    console.log('Comp Choice', compChoice)

   if(userChoice === compChoice){
      drawGame()
   }else{
    let userWin = true
    if(userChoice === 'rock'){
        userWin = compChoice === 'paper' ? false : true
    }else if(userChoice === 'paper'){
        userWin = compChoice === 'scissors' ? false : true
    }else{
        userWin = compChoice === 'rock' ? false : true
    }
    showWinner(userWin, userChoice, compChoice)
   }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id')
        // console.log('User select', userChoice)
        playGame(userChoice)
    })
})