function A1() {
    alert("On utilise les fichier .csv pour faire des tables de données telles qu'une liste de clients avec leur âge, leur prénom ect...")
}

function R1() {
    document.querySelector("#ea").classList.add("bon")
    if(confirm("Hé oui, dans un fichier .csv, la première ligne permet de chercher plus aisément dans les valeurs et d'avoir une description de ces dernières quand on les trouve. Voulez-vous accéder à la question suivante ?")) {
        document.location.href=("../Q6/Q6.html")
    } else {}
}

function R2() {
    document.querySelector("#eb").classList.add("rate")
    alert("Il est vrai qu'il faut toujours indiquer la source de ses informations, mais ce n'est malheureusement pas le cas ici.")
}

function R3() {
    document.querySelector("#ec").classList.add("rate")
    alert("Faux ! On peut les ouvrir avec un bloc note tout simple !")
}