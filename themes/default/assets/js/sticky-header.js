function stickyHeader(sticky, navbar) {
  if (window.pageYOffset > sticky) {
    navbar[0].classList.add("sticky")
  } else {
    navbar[0].classList.remove("sticky");
  }
}

if($('.header--fixed').length){
  const navbar = document.getElementsByClassName("header--fixed");
  const sticky = navbar[0].offsetTop;
  window.onscroll = function() {stickyHeader(sticky, navbar)};
  stickyHeader(sticky, navbar);
}