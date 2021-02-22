
var menu = document.getElementsByTagName("ul")[0];
var toggleMenu = document.getElementById("toogleMenu");
toggleMenu.addEventListener('click', toggle, false);

function toggle() {
    if (menu.className == "menuClosed") {
        menu.classList.remove("menuClosed");
        menu.classList.add("menuOpened");
    } else {
        menu.classList.remove("menuOpened");
        menu.classList.add("menuClosed");
    }
}