function A1() {
    alert("Le complément à deux permet de faire des opérations de nombres relatifs en binaire.")
}

function R1() {
    document.querySelector("#ca").classList.add("rate") //à revoir
    alert("Quand on inverse un nombre binaire, on fait le complément à un. C'est donc une mauvaie réponse.")
}

function R2() {
    document.querySelector("#cb").classList.add("bon")
    if(confirm("C'est la bonne réponse ! On ne détaillera pas ici le processus de calcul mais sachez que ça rend possible les opérations avec des nombres relatifs en binaire. Voulez-vous accéder à la question suivante ?")) {
        document.location.href=("../Q4/Q4.html")
    } else {}
}

function R3() {
    document.querySelector("#cc").classList.add("rate")
    alert("Mauvaise réponse : pour convertir un nombre en hexadécimal, il faut scinder le nombre binaire en plusieurs paquets de 4 et convertir chaque paquet en hexadécimal.")
    alert("C'est pas très clair, du coup voici un exemple : 10110010 donne 1011 = B et 0010 donne 2. Donc 10110010 en binaire = B2 en hexadécimal.")
}