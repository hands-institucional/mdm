$(window).scroll(function() {

    var top=$(window).scrollTop();
    var home = window.location.pathname === "/" || window.location.pathname === "/mdm/"
   
    if(top > 40){
        $("#language-selection").addClass("menuScroll");
        $("nav").addClass("menuScroll");
        home ? $("#mdm-logo").attr("src","assets/img/mdm-logo-min.png") 
            : $("#mdm-logo").attr("src","../assets/img/mdm-logo-min.png");

    } else {
        $("#language-selection").removeClass("menuScroll");
        $("nav").removeClass("menuScroll");
        home ? $("#mdm-logo").attr("src","assets/img/mdm-logo.png")
            : $("#mdm-logo").attr("src","../assets/img/mdm-logo.png");
    }

})



window.onload = function(){
var menu = document.getElementById("menu");
menu.addEventListener("click", () => {

    alternar(menu)

});


console.log(menu.classList.contains("open"))
function alternar(menu) {
    if (menu.classList.contains("open")) {
        document.getElementById("segundo").style.display = "none";
        document.getElementById("terceiro").style.display = "none";
        menu.classList.remove("open")
        console.log(menu.classList.contains("open"))

    } else {
        document.getElementById("segundo").style.display = "block";
        document.getElementById("terceiro").style.display = "block";
        menu.classList.add("open")
        console.log("add")
    }


}
}


    