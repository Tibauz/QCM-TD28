function troll0() {
    document.querySelector("#trolla").innerHTML = "<b>✓</b>"
}

function troll1() {
    document.querySelector("#trolla").innerHTML = "la réponse C"
}

function R4(color) {
    document.body.style.background = document.getElementById("Couleur").value
    document.querySelector("#trolla").classList.add("bon")
    alert("Bien joué !")
}

function R3() {
    document.querySelector("#fc").classList.add("rate")
    alert("Bien tenté mais la réponse n'est pas ici...")
}

function R2() {
    document.querySelector("#facebook").classList.add("rate")
    alert("C'est la mauvaise réponse, en effet le hardware n'est pas virtuel. Le software oui mais n'est pas un virus.")
}

function R1() {
    document.querySelector("#fa").classList.add("rate")
    alert("Les serveurs de Google sont composés de hardware sur lequel tourne un software.")
}

function A1() {
    alert("Essayez de mettre une couleur autre que celles proposées en bas de la page !")
}
