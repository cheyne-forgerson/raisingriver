window.onload = setTimeout(function revealTitle() {
    document.getElementById("titleS").className = "titleS-on";
    document.getElementById("titleH").className = "titleH-on";
    document.getElementById("titleO").className = "titleO-on";
    document.getElementById("titleP").className = "titleP-on";
    document.getElementById("titleUnderline").className = "titleUnderline-on";
}, 500);

window.onload = setTimeout(function welcome() {
    document.getElementById("revealShop-h1-1").className = "revealShop-h1-1-on";
}, 4000);

window.onload = setTimeout(function stayAwhile() {
    document.getElementById("revealShop-h1-2").className = "revealShop-h1-2-on";
}, 5500);

window.onload = setTimeout(function revealShop() {
    document.getElementById("revealShop").className = "revealShop-on";
}, 7500);
