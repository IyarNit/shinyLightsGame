const $ = function (s, p = document) {
    return p.querySelector(s)
}
// ==================================function above shortens querySelector
const vacationDataBase = []
console.log(vacationDataBase)
function addToDataBase() {
    var vacationName = $("#vName")

    var vacationImg = $("#vImg")

    var vacationPrice = $("#vPrice")

    var vacationQuality = $("#fun")

    var vacation = { Name: vacationName.value, Img: vacationImg.value, price: vacationPrice.value, quality: vacationQuality.value }

    vacationDataBase.push(vacation)

    localStorage.setItem("vacationDataBase", JSON.stringify(vacationDataBase))

}
// ================================================above is main array and loal storage saver
init()
function saveBtn() {
    addToDataBase()
    addVacationCard((vacationDataBase.length - 1))
}
// ======================================above is save(function run from html click) and database add function
function addVacationCard(index) {
    var parent = document.getElementById("group");
    var deleBtn = document.createElement("button")
    var d1 = document.createElement("div")
    d1.className = "card";
    d1.style.width = "33%"
    d1.id = "d1ID"
    d1.style.left = "160px"
    d1.style.marginTop = "30px"
    d1.style.position = "relative"
    // ====above is d1 properties
    var vacationArr = JSON.parse(localStorage.getItem("vacationDataBase"))
    // console.log(vacationArr)
    var newVacation = vacationArr[index]
    if (newVacation.Name == "" || newVacation.Img == "" || newVacation.price == "" || newVacation.quality == "") {
        // localStorage.clear()
        return
    }
    let cardHeader = document.createElement("h5")
    cardHeader.id = "vacationTitle"
    cardHeader.innerText = newVacation.Name
    // console.log(cardHeader.innerText)
    cardHeader.className = "card-title"
    d1.append(cardHeader)
    let img = document.createElement("img")
    img.className = "card-img-top"
    img.src = newVacation.Img
    img.style.height = "150px"
    img.style.width = "300px"
    var d2 = document.createElement("div")
    d2.className = "card-body"
    d1.append(d2)
    d2.append(img)
    // let blackstar = document.getElementById("bStar")
    // blackstar.style.height = "10px"
    // blackstar.style.width = "10px"
    let vacationPara = document.createElement("p")
    vacationPara.className = "card-text"
    // if (newVacation.quality == "excellent") {
    //     let blackstar = document.getElementById("bStar")
    //     blackstar.style.visibility - "visible"
    //     blackstar.style.height = "10px"
    //     blackstar.style.width = "10px"
    //     // d2.append(blackstar)
        vacationPara.innerText = "The vacation price is: " + newVacation.price + "$, " + "and the quality was rated by users as: " + newVacation.quality+".";
    

    d2.append(vacationPara)
    deleBtn.id = "dBtn"
    deleBtn.onclick = function delBtn() {
        vacationDataBase.splice(index.length, 1)
        deleBtn.parentElement.parentElement.parentElement.remove()
        localStorage.clear()
        localStorage.setItem("vacationDataBase", JSON.stringify(vacationDataBase))
    }
    deleBtn.innerText = "X";
    deleBtn.style.textAlign = "center";
    deleBtn.style.position = "relative"
    deleBtn.className = "btn btn-danger dBtn";
    parent.append(d1)
    var d3 = document.createElement("div")
    d2.append(d3)
    d3.append(deleBtn)
    let likeBtn = document.createElement("button")
    likeBtn.className = "btn btn-primary";
    likeBtn.style.position = "relative";
    let counter = 0
    likeBtn.innerText = "Like " + counter
    likeBtn.onclick = function () {
        likeBtn.innerText = "Like " + counter++
    }
    likeBtn.style.marginLeft = "15px"
    d3.append(likeBtn)
    // =====================================
    localStorage.setItem("vacationDataBase", JSON.stringify(vacationDataBase))
    var form = document.getElementById("form")
    form.reset()
}

function init() {
    var v = localStorage.getItem("vacationDataBase")
    console.log(vacationDataBase)
    var vac = JSON.parse(v)
    console.log(vacationDataBase)
    for (let index = 0; vac && index < vac.length; index++) {
        addVacationCard(index)
    }
}
