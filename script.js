let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function addPoints(value) {
    if (value.includes("1")) {
        if (value.includes("home")) {
            homeScore +=1
            homeEl.textContent = homeScore
        } else {
            guestScore +=1
            guestEl.textContent = guestScore
        }
    } else if (value.includes("2")) {
        if (value.includes("home")) {
            homeScore +=2
            homeEl.textContent = homeScore
        } else {
            guestScore +=2
            guestEl.textContent = guestScore
        }
    } else {
        if (value.includes("home")) {
            homeScore +=3
            homeEl.textContent = homeScore
        } else {
            guestScore +=3
            guestEl.textContent = guestScore
        }
    }
    
}

function startNewGame() {
    homeEl.textContent = 0
    guestEl.textContent = 0
}