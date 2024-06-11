let points = 100000
let PointsTracker = document.getElementById("pointsTracker")
let fist = 0
let squasherAmount = document.getElementById("squasherAmount")
let sauce = 0
let Bottle = document.getElementById("bottle")
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
let ketcost = document.getElementById("ketcost")
let bgmusic= new Howl({
    src: ['Sounds/spinningMonkeys.mp3'],
    autoplay: true,
    Volume: .10,
    loop: true,
})
let Splat= new Howl({
    src: ['Sounds/Splat.mp3'],
    autoplay: false,
    Volume: .15,
})
let Punch= new Howl({
    src: ['Sounds/Punch.mp3'],
    autoplay: false,
    Volume: .15,
})
let Squeeze= new Howl({
    src: ['Sounds/Ketup.mp3'],
    autoplay: false,
    Volume: .15,
})
let Pipe= new Howl({
    src: ['Sounds/Qpipe.mp3'],
    autoplay: false,
    Volume: .01,
})
let Zelda= new Howl({
    src: ['Sounds/Zelda.mp3'],
    autoplay: false,
    Volume: .30,
})


function increasePoints() {
    Splat.play()
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
        Punch.play()

     fistcost.innerText = "Tomato Squasher $" +(10 + fist ** 1.5).toFixed(0)
    }
    else {
        alert("Get your money up. U cant take that... Goofy.")
    }
}

function buyketchup() {
    let upcost = 100 + sauce ** 1.5
    if (points >= upcost) {
        points = points - upcost
        PointsTracker.innerText = "$" + points.toFixed(0)
        sauce = sauce + 1
        Bottle.innerText = sauce + " Bottles"
        ketcost.innerText = "ketchup Bottle $" + (100 + sauce ** 1.5).toFixed(0)
        Squeeze.play()
    }
    else {
        alert("Get your money up. U cant do that... Goofy.")
    }
}

function buyFactory() {
    let factcost = 1000 + cog ** 1.5
    if (points >= factcost) {
        points = points - factcost
        PointsTracker.innerText = "$" + points.toFixed(0)
        cog = cog + 1
        Factory.innerText = cog + "Factory"
        cogcost.innerText = "Tomato Factory $" + (1000 + cog ** 1.5).toFixed(0)
        Pipe.play()

    }
    else {
        alert("Get your money up. U cant do that... Goofy.")
    }
}

function buyGoldtomato() {
    let Gcost = 100000 + goldie ** 1.5
    if (points >= Gcost) {
        points = points - Gcost
        PointsTracker.innerText = "$" + points.toFixed(0)
        goldie = goldie + 1
        Gtomato.innerText = goldie + " Gold Tomato"
        Zelda.play()
    }
    else {
        alert("You are NOT Elon musk ")
    }
}

function gameloop() {
    points = points + (1 * fist)
    points = points + (25 * sauce)
    points = points + (50 * cog)
    points = points + (1000 * goldie)
    PointsTracker.innerText = "$" + points.toFixed(0)
}


setInterval(gameloop, 1000)