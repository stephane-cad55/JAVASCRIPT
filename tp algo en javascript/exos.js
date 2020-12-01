function NbPair() {
    var value = prompt(" quel est votre nombre");
    if (value % 2 == 0) {
        console.log("paire");
        prompt("paire");
        return true;

    } else {
        console.log("impaire");
        prompt("impaire");
        return false
    }
}

function PremierMot() {
    var str = "Comment allez vous?";
    var srt1 = str.split(" ");
    alert(srt1[0]);
}

function Majuscule() {
    var str = 'Hello World !';
    str.toLowerCase(); // hello world !
    str.toUpperCase(); // HELLO WORLD !
    alert(str);
}

function CamelCase() {
    CamelCase = function CamelCase(str) {
        return str.replace(/\W+(.)/g, function (match, chr) {
            return chr.toUpperCase();
        });
    }

    console.log(CamelCase("JavaScript Exercises"));
}

function Tableau1() {
    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    for (var i = 0; i < array.length; i++) {
        alert(array);
    }
}

function Tableau2() {
    let array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    for (let i = 0; i < array.length; i++) {
        alert(array);
    }
}

function Tableau3() {
    var array = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    for (let i = 0; i < array.length; i++) {
        alert(array[i])
    }
}

function ForceMdp() {
    N = 0;
    var password = prompt("Saisis un mot de passe")
    if (password.match(/[0-9]/)) {
        N = N + 10;
    }
    if (password.match(/[a-z]/)) {
        N = N + 26;
    }
    if (password.match(/[A-Z]/)) {
        N = N + 26;
    }
    console.log(N);

    var L = password.length;

    strength = L * Math.log(N) / Math.log(2);

    if (strength < 65) {
        alert("Mot de passe faible")
    }
    else if (strength >= 65 && strength < 80) {
        alert("Mot de passe moyen")
    }
    else {
        alert("Mot de passe fort")
    }
    console.log(strength);
}

function SaisieNonCorrecte() {

    do {
        var saisie = prompt("quel est le genre de votre tamagotchi, male ou femelle?");
        var str = saisie.toLowerCase();

        if (str === "femelle") {
            alert("Femelle");
            break;
        }

        if ((str === "male") | (str === "mâle")) {
            alert("Male");
            break;
        }

    } while (str != "femelle" | str != "male");
}















