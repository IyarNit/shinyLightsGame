const $ = function (s, p = document) {
    return p.querySelector(s)
}
const $$ = function (s, p = document) {
    return p.querySelectorAll(s)
}

const colorArray = ["blue", "red", "white", "grey", "green", "yellow", "purple"]

function rave() {
    return colorArray[Math.floor(Math.random() * 7)]
}

var b = document.getElementById("body")
let noobBtn = document.createElement("button")
noobBtn.innerText = "Noob difficulty"
let proBtn = document.createElement("button")
proBtn.innerText = "Think youre a pro?"
// var parent = document.getElementById("parent")
b.append(noobBtn)
b.append(proBtn)
var counter = 0
var id = 0
var proHighScore = 0
var noobHighScore = 0
// parent.style.width = "1340px"
// parent.style.height = "500px"

var score = document.createElement("h1")
// score.innerText = "Your Score is: "+counter
b.append(score)

noobBtn.onclick = function runNoob() {
    setInterval(function () {
        noobBtn.style.visibility = "hidden"
        proBtn.style.visibility = "hidden"
        createShinyDivNoob()
    }, 500)
}



proBtn.onclick = function runPro() {
    setInterval(function () {
        noobBtn.style.visibility = "hidden"
        proBtn.style.visibility = "hidden"
        createShinyDivPro()
    }, 500)
}



function createShinyDivNoob() {
    let d1 = document.createElement("div")
    var b = document.getElementById("parent")
    d1.id = "div" + id
    id++
    d1.style.width = "80px"
    d1.style.height = "80px"
    d1.style.position = "fixed"
    d1.style.top = Math.floor(Math.random() * document.documentElement.clientWidth) + "px";
    d1.style.left = Math.floor(Math.random() * document.documentElement.clientHeight) + "px";
    d1.className = rave()
    d1.style.cursor = "pointer"
    body.append(d1)
    d1.onclick = function () {
        counter++
        score.innerText = "Your Score is: " + counter
        console.log(counter)
        delDiv()
    }

    function delDiv() {
        d1.remove()
    }

    function delDivUI() {
        // this function delets divs on Interval only!
        // id++
        // d1.id = "Div" + id
        d1.remove(id)
    }
    setInterval(function () {
        delDivUI()
    }, 3000)
}

function createShinyDivPro() {
    let d1 = document.createElement("div")
    var b = document.getElementById("parent")
    d1.id = "div" + id
    id++
    d1.style.width = "40px"
    d1.style.height = "40px"
    d1.style.position = "fixed"
    d1.style.top = Math.floor(Math.random() * document.documentElement.clientWidth) + "px";
    d1.style.left = Math.floor(Math.random() * document.documentElement.clientHeight) + "px";
    d1.className = rave()
    b.append(d1)
    d1.onclick = function () {
        counter++
        score.innerText = "Your Score is: " + counter
        console.log(counter)
        delDiv()
    }
    function delDiv() {
        d1.remove()
    }
    function delDivUI() {
        d1.remove(id)
    }
    setInterval(function () {
        delDivUI()
    }, 800)
}




console.log(counter)