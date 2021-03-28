function A1() {
    alert("Parmi les trois réponses se cache une police d'écriture bien connue...")
}

function R1() {
    document.querySelector("#ba").classList.add("rate")
    alert("Malheureusement c'est bien une méthode d'encodage...")
    alert("En effet, UTF-16 est un codage des caractères définis par Unicode où chaque caractère est codé sur une suite de un ou deux mots de 16 bits.")
}

function R2() {
    document.querySelector("#bb").classList.add("rate")
    alert("C'est une mauvaise réponse : en effet, Unicode est un standard informatique qui permet des échanges de textes dans différentes langues, à un niveau mondial.")
}

function R3() {
    document.querySelector("#bc").classList.add("bon")
    if(confirm("Bien joué ! Arial est la police d'écriture principale de Microsoft et a été crée en 1982. Voulez-vous accéder à la question suivante ?")){
        document.location.href=("Q3.html")
    } else {}
}