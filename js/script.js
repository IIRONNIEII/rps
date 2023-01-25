function getCompChoi() {
    let a = Math.floor(Math.random()*3) + 1
    return a
}

function getUserChoi() {
    let b = prompt("Choose rock/paper/scissor")
    b = b.toLowerCase()
    if (b=="rock"){
        return 1
    } else if (b=="paper"){
        return 2
    } else {
        return 3
    }
}

function win(user, comp) {
    if (user==1 && comp==3) {
        return "User wins!"
    } else if (comp==1 && user ==3) {
        return "Comp wins!"
    } else if (user>comp){
        return "User wins!"
    } else {
        return "Comp wins!"
    }
}

function playRound() {
    let a = getCompChoi()
    let b = getUserChoi()
    return win(b,a)
}

function game() {
    let a = 0
    let b = 0
    for (let i=0; i<5; i++){
        
        // console.log("yeahyeah")
        if (playRound() == "User wins!") {
            b++
        } else {
            a++
        }
    }
    if (a>b){
        console.log("User Wins!")
    } else {
        console.log("Comp Wins!")
    }
    
}
// console.log("yea")
game()