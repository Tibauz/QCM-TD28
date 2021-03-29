function R1() {
    document.querySelector("#aa").classList.add("rate");
    alert("Attention, a ** b veut dire a puissance b. Retente ta chance !")
}

function R2() {
    document.querySelector("#ab").classList.add("bon");
    if(confirm("Bien joué, c'est la bonne réponse ! Voulez-vous accéder à la question suivante ?")){
        document.location.href=("Q2.html")
    } else {}
}

function R3() {
    document.querySelector("#ac").classList.add("rate");
    alert("Attention, c % b est le reste de la division de c par b. Retente ta chance !")
}

function A1() {
    alert("Prenez une feuille et faites les opérations : '**' signifie puissance et '%' le reste de la division.")
}
