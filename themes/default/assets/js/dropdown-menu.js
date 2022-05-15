/*dropdown menu*/
$('.header__menuItem--hasSubmenu > .header__menuLink').on("click", function (e) {
    e.preventDefault();
    var subMenu = $(this).siblings(".header__submenu");

    if (subMenu.hasClass("header__submenu--hidden")) {
        console.log('test');
        $(".header__submenu").addClass("header__submenu--hidden");
        $(".header__menuItem--hasSubmenu > .header__menuLink").removeClass("header__menuLink--open");
        $(this).addClass("header__menuLink--open");
        subMenu.removeClass("header__submenu--hidden");
    } else {
        $(".header__submenu").addClass("header__submenu--hidden");
        $(this).removeClass("header__menuLink--open");
        subMenu.addClass("header__submenu--hidden");
    }
});

$('body').click(function (e) {
    if ($(e.target).closest('.header__nav').length === 0) {
        $(".header__menuItem--hasSubmenu > .header__menuLink").removeClass("header__menuLink--open");
        $(".header__submenu").addClass("header__submenu--hidden");
    }
});