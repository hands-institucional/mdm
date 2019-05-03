$(window).scroll(function() {

    var top=$(window).scrollTop();
    var home = window.location.pathname === "/"

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
    