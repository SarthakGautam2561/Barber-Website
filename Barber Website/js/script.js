var menubtn = document.getElementById('menu-btn');
var sidenav = document.getElementById('side-nav');
var menu = document.getElementById('menu');

sidenav.style.right = "-250px";

menubtn.onclick = function () {
    if (sidenav.style.right == "-250px") {
        sidenav.style.right = "0";
        menu.src = "/Barber Website/images/close.png";
    }
    else {
        sidenav.style.right = "-250px";
        menu.src = "/Barber Website/images/menu.png";
    }
}