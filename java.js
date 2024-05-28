let points = 0
let PointsTracker = document.getElementById("pointsTracker")
let fist = 0
let squasherAmount = document.getElementById("squasherAmount")
let sauce = 0
let bottle = document.getElementById("bottle")
let cog = 0
let Factory = document.getElementById("gear")
let goldie = 0
let Gtomato = document.getElementById("Golden")


function increasePoints() {
    points = points + 1

    PointsTracker.innerText = "$" + points
}

function buyFist() {
    if (points >= 10) {
        points = points - 10
        PointsTracker.innerText = "$" + points
        fist = fist + 1
        squasherAmount.innerText = fist + " fist"
    }
    else {
        alert("Get your money up. U cant take that... Goofy.")
    }
}

function buyketchup() {
    if (points >= 100) {
        points = points - 100
        PointsTracker.innerText = "$" + points
        sauce = sauce + 1
        bottle.innerText = "Upgraded"
    }
    else {
        alert("Get your money up. U cant do that... Goofy.")
    }
}

function buyFactory() {
    if (points >= 1000) {
        points = points - 1000
        PointsTracker.innerText = "$" + points
        cog = cog + 1
        Factory.innerText = cog + "Factory"
    }
    else {
        alert("Get your money up. U cant do that... Goofy.")
    }
}

function buyGoldtomato() {
    if (points >= 100000) {
        points = points - 100000
        PointsTracker.innerText = "$" + points
        goldie = goldie + 1
        Gtomato.innerText = goldie + " Gold Tomato"
    }
    else {
        alert("You are NOT Elon musk ")
    }
}

function gameloop() {
    points = points + (1 * fist)
    points = points + (50 * cog)
    points = points + (1000 * goldie)
    PointsTracker.innerText = "$" + points   
}

setInterval(gameloop, 1000)