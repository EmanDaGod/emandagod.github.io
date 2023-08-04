function loginSlider() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btnCover");
    var a = document.getElementById("loginToggle");
    var b = document.getElementById("registerToggle");
    x.hidden = false;
    y.hidden = true;
    z.style.left = "0px";
    z.style.transition = "all 300ms";
    z.style.width = "100px";
    a.style.color = "black";
    b.style.color = "white";
}
function registerSlider() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btnCover");
    var a = document.getElementById("loginToggle");
    var b = document.getElementById("registerToggle");
    x.hidden = true;
    y.hidden = false;
    z.style.left = "95px";
    z.style.transition = "all 300ms";
    z.style.width = "125px";
    a.style.color = "white";
    b.style.color = "black";
}