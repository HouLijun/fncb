$(function(){
    $("img").lazyload({effect: "fadeIn"});
    $('#fullpage').fullpage({
        verticalCentered:false,
        afterRender:function () {
            $(".first .pedestal").addClass("animated bounceInUp");
            $(".first .light").addClass("animated fadeIn");
            $(".first .cow").addClass("animated fadeIn");
            $(".first .stars").addClass("animated fadeIn infinite");
            $(".first .title").addClass("animated flipInX");
            $(".first .description").addClass("animated tada");
            $(".first .code-1,.first .code-2,.first .code-3").addClass("animated fadeInLeftBig");
            setTimeout(function () {
                $(".first .description").addClass("show");
            },4000)
        },
        afterLoad:function (anchorLink,index) {
            if(index==1){
                $(".first *").show();
                $(".first .pedestal").addClass("animated bounceInUp");
                $(".first .light").addClass("animated fadeIn");
                $(".first .cow").addClass("animated fadeIn");
                $(".first .stars").addClass("animated fadeIn infinite");
                $(".first .title").addClass("animated flipInX");
                $(".first .description").addClass("animated tada");
                $(".first .code-1,.first .code-2,.first .code-3").addClass("animated fadeInLeftBig");
                setTimeout(function () {
                    $(".first .description").addClass("show");
                },4000)
            }else if(index==2){
                $(".second *").show();
                $(".second .envelope").addClass("animated rotateInUpLeft");
                $(".second .title").addClass("animated bounceIn");
                $(".second .letter").addClass("animated fadeInUp");
                $(".second .stars,.second .star").addClass("animated flash");
                setTimeout(function () {
                    $(".second .letter").addClass("show");
                },1500)
            }else if(index==3){
                $(".third *").show();
                $(".third .title").addClass("animated flipInY");
                $(".third .cloud").addClass("animated fadeInUpBig");
                $(".third .cow").addClass("animated rotateIn");
                $(".third .center").addClass("animated fadeInDownBig");
                setTimeout(function () {
                    $(".third .center").addClass("rotating");
                },1000);
                setTimeout(function () {
                    $(".third .small .part").addClass("show");
                },1500);
                setTimeout(function () {
                    $(".third .large .part").addClass("show");
                },3000);
                setTimeout(function () {
                    $(".third .star").addClass("animated fadeIn infinite");
                },3500);
            }else if(index==4){
                $(".forth *").show();
                $(".forth .title").addClass("animated flipInY");
                $(".forth .cloud").addClass("animated fadeIn");
                $(".forth .floor").addClass("animated flipInX");
                $(".forth .stars").addClass("animated fadeIn infinite");
            }else if(index==5){
                $(".fifth *").show();
                $(".fifth .title").addClass("animated fadeInDownBig");
                $(".fifth .generalize").addClass("animated fadeInUpBig");
                $(".fifth .media").addClass("animated fadeInUpBig");
                $(".fifth .avatar").addClass("animated rotateIn");
                $(".fifth .step").addClass("animated fadeInRightBig");
                $(".fifth .flag").addClass("animated pulse infinite");
                $(".fifth .number").addClass("animated bounceIn");
                $(".fifth .keyword").addClass("animated rollIn");
            }else if(index==6){
                $(".sixth *").show();
                $(".sixth .title").addClass("animated fadeInDownBig");
                $(".sixth .generalize").addClass("animated fadeInLeftBig");
                $(".sixth .media").addClass("animated fadeInRightBig");
                $(".sixth .btn").addClass("animated pulse infinite");
            }
        },
        onLeave:function(index,nextIndex,direction){
            if(nextIndex==1){
                $(".first *").hide().removeClass("show");
            }else if(nextIndex==2){
                $(".second *").hide().removeClass("show");
            }else if(nextIndex==3){
                $(".third *").hide().removeClass("show");
            }else if(nextIndex==4){
                $(".forth *").hide().removeClass("show");
            }else if(nextIndex==5){
                $(".fifth *").hide().removeClass("show");
            }else if(nextIndex==6){
                $(".sixth *").hide().removeClass("show");
            }
        }
    });
    $("#J_generalize").on("touchstart",function () {
        $(".seventh").addClass("animated fadeInLeftBig").css({display:"block"});
        $(".seventh .title").addClass("animated swing");
        $(".seventh .label").addClass("animated fadeInUpBig");
    })
    $("#J_media").on("touchstart",function () {
        $(".eighth").addClass("animated fadeInLeftBig").css({display:"block"});
        $(".eighth .title").addClass("animated swing");
        $(".eighth .label").addClass("animated fadeInUpBig");
    })
    $(".J_submit").on("touchstart",function (e) {
        e.preventDefault();
        $(".welcome").css({display:"block"}).addClass("show").children(".panel").addClass("animated fadeInDownBig");
        $(".welcome .plane").addClass("show");
        $(".welcome .light").addClass("animated fadeIn infinite");
        $(".welcome .btn").addClass("animated tada infinite");
    })
});