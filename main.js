let icoButton = document.getElementById("icoBut");
let vkIco = document.getElementById("vkIco");
let telegaIco = document.getElementById("telegaIco");
let githIco = document.getElementById("githIco");
let numTel = document.getElementById('numTel');
let proj = document.getElementById('proj');
let certif = document.getElementById('certif');


numTel.hidden = true;

icoButton.onclick = function() {
    icoButton.hidden = true;
    numTel.hidden = false;
};

vkIco.onmouseover = function() {
    vkIco.style.filter = "invert(1)";
};

vkIco.onmouseout = function() {
    vkIco.style.filter = "invert(0)";
}

TelegaIco.onmouseover = function() {
    TelegaIco.style.filter = "invert(1)";
};

TelegaIco.onmouseout = function() {
    TelegaIco.style.filter = "invert(0)";
}

githIco.onmouseover = function() {
    githIco.style.filter = "invert(1)";
};

githIco.onmouseout = function() {
    githIco.style.filter = "invert(0)";
}

icoBut.onmouseover = function() {
    icoBut.style.filter = "invert(1)";
};

icoBut.onmouseout = function() {
    icoBut.style.filter = "invert(0)";
}



proj.onmouseover = function() {
    proj.style.color = "rgb(47, 163, 170)"
};

proj.onmouseout = function() {
    proj.style.color = "rgb(170, 170, 170)"
};

certif.onmouseover = function() {
    certif.style.color = "rgb(47, 163, 170)"
};

certif.onmouseout = function() {
    certif.style.color = "rgb(170, 170, 170)"
};