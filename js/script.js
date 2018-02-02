$(document).ready(function(){
        $("#anchor-link-1").on("click", function(){
            var scroll=$("#top-header").offset().top;
            $('html, body').animate({scrollTop: scroll}, 2000);
        });
    });
