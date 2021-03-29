function Q1() {
    if(confirm("Voulez vous vraiment entrer dans le QCM ???")){
        window.open("troll.html","_blank");
        document.location.href=("questions/Q1/Q1.html");
    } else {}
}

function obscur() {
    document.body.style.background = "black";
}

function goINDEX() {
    document.location.href="indexQCM.html";
}

function noir() {
    document.body.style.background = "black";
    document.body.style.color = "white";
}

function blanc() {
    document.body.style.background = "white";
    document.body.style.color = "black";
}

function couleur(color) {
    document.body.style.background = document.getElementById("Couleur").value
}
