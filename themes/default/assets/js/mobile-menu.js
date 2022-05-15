/* mobile menu */

$('.header__hamburger').click(function(){
    $(this).toggleClass('header__hamburger--open');
    $('html, body').toggleClass('blocked');
    $(".header__nav").toggleClass('header__nav--visible');
});