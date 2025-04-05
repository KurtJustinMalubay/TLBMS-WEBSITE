let show = false;
function showMenu(){
    let menu = document.getElementById("Menu");
    let body = document.getElementById("body");
    let btn1 = document.getElementById("btnMenu");
    if (!show){
        menu.style.display = "block";
        show = true;
        btn1.style.display = "none";
        body.style.overflow = "hidden";
    }
    else{
        menu.style.display = "none";
        show = false;
        btn1.style.display = "block";
        body.style.overflow = "auto";
    }
}