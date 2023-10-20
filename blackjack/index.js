let firstCard = 6

let secondCard = 15

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
function startGame(){
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    
    }else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }else if (sum > 21){
       message = "You're out of the game!"
        isAlive = false
    }
   alert("hasBlackJack")
    alert(isAlive)
    alert(message)
    
}
