function noir2() {
    if (confirm("Si vous mettez la page en noir, vous ne verrez plus la table de vérité.")) {
        document.body.style.background = "black";
        document.body.style.color = "white";
    } else {}
}

function A1() {
    alert("Il faut voir '1' comme 'True' et '0' comme 'False'.")
}

function R1() {
    document.querySelector("#da").classList.add("rate")
    alert("Presque : vous avez inversé des lettres ;)")
}

function R2() {
    document.querySelector("#db").classList.add("bon")
    if(confirm("On observe que si A = 1 ou que B = 0, alors S = 1. C'est donc une bonne réponse ! Voulez-vous accéder à la question suivante ?")) {
        document.location.href=("../Q5/Q5.html")
    } else {}
}

function R3() {
    document.querySelector("#dc").classList.add("rate")
    alert("Bah non regardez à la dernière ligne : A et B sont égaux à 1 et pourtant S = 1.")
}