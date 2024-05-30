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
let cogcost = document.getElementById("cogCost")
let fistcost = document.getElementById("FistCost")
let fistbtn = document.getElementById("fistbtn")
let ketchupbtn = document.getElementById("Golden")
let factorybtn = document.getElementById("factorybtn")
let Gtomatobtn = document.getElementById("Gtomatobtn")


function increasePoints() {
    points = points + 1

    PointsTracker.innerText = "$" + points.toFixed(0)
}

function buyFist() {
    let cost = 10 + fist ** 1.5
    if (points >= cost) {
        points = points - cost
        PointsTracker.innerText = "$" + points.toFixed(0)
        fist = fist + 1
        squasherAmount.innerText = fist + " fist"
        PointsTracker.innertext = points.toFixed(0)

     fistcost.innerText = "Tomato Squasher $" +(10 + fist ** 1.5).toFixed(0)
    }
    else {
        alert("Get your money up. U cant take that... Goofy.")
    }
}

function buyketchup() {
    if (points >= 100) {
        points = points - 100
        PointsTracker.innerText = "$" + points.toFixed(0)
        sauce = sauce + 1
        bottle.innerText = "Upgraded"
    }
    else {
        alert("Get your money up. U cant do that... Goofy.")
    }
}

function buyFactory() {
    let factcost = 1000 + cog ** 1.5
    if (points >= 1000) {
        points = points - 1000
        PointsTracker.innerText = "$" + points.toFixed(0)
        cog = cog + 1
        Factory.innerText = cog + "Factory"
        cogcost.innerText = "Tomato Factory $" + (1000 + cog ** 1.5).toFixed(0)

    }
    else {
        alert("Get your money up. U cant do that... Goofy.")
    }
}

function buyGoldtomato() {
    if (points >= 100000) {
        points = points - 100000
        PointsTracker.innerText = "$" + points.toFixed(0)
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
    PointsTracker.innerText = "$" + points.toFixed(0)
}


setInterval(gameloop, 1000)