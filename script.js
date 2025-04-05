let show = false;
function showMenu(){
    let menu = document.getElementById("Menu");
    let body = document.getElementById("body");
    if (!show){
        menu.style.margin = "0 0 0 0";
        show = true;
        body.style.overflow = "hidden";
    }
    else{
        menu.style.margin = "-100vh 0 0 0";
        show = false;
        body.style.overflow = "auto";
    }
}