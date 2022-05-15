
$(function() {
    let media991 = window.matchMedia("(max-width: 991px)");

    if (media991.matches) {
        on991();
    } else {
        off991();
    }

    media991.addEventListener("change", function(media991) {
        if (media991.matches) {
            on991();
        }else{
            off991();
        }
    });

    function on991(){
        menuMobile();
    }
    function off991(){
        menuMobile(false);
    }

    function menuMobile(active=true) {
        if (active) {
            $(".header__nav").addClass('padding-container');
        }else{
            $(".header__nav").removeClass('padding-container');
        }
    }
});


