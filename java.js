    let points = 0
    let PointsTracker = document.getElementById("pointsTracker")
    let fist = 0
    let squasherAmount = document.getElementById("squasherAmount")
    let sauce= 0
    let bottle = document.getElementById("bottle")

    function increasePoints () {
        points = points+1

        PointsTracker.innerText = "$" + points
    }

    function buyFist () {
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

    function buyketchup () {
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