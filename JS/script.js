
//Menu DropDown

function openMenu(){
    var btnOpen = document.getElementById("menu-dropdown").style.transform;

    if(btnOpen == "translateX(-120%)"){
        document.getElementById("menu-dropdown").style.transform = "translateX(-0%)";
        document.getElementById("barras-do-menu").style.display = "none";
        document.getElementById("barras-do-menu-1").style.transform = "rotate(50deg)";
        document.getElementById("barras-do-menu-1").style.position = "absolute";
        document.getElementById("barras-do-menu-2").style.transform = "rotate(-50deg)";
        document.getElementById("barras-do-menu-2").style.position = "absolute";
        
    } else {
        document.getElementById("barras-do-menu").style.display = "flex";
        document.getElementById("menu-dropdown").style.transform = "translateX(-120%)";
        document.getElementById("barras-do-menu-1").style.transform = "rotate(0deg)";
        document.getElementById("barras-do-menu-1").style.position = "relative";
        document.getElementById("barras-do-menu-2").style.transform = "rotate(0deg)";
        document.getElementById("barras-do-menu-2").style.position = "relative";
    }
}