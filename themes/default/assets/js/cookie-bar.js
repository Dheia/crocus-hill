const cookieName = 'cookie-accept';
if(getCookie(cookieName)){
    removeCookieBar();
}else{
    $('.cookie').show();
    $('.cookie__accept').on("click", function (e) {
        e.preventDefault();
        removeCookieBar();
        setCookie(cookieName, true, 30);
    });
}

function removeCookieBar(){
    const siteWrapper = $('.site-wrapper');
    const cookieBar = $('.cookie');
    if(siteWrapper.hasClass('site-wrapper--cookie')){
        siteWrapper.removeClass('site-wrapper--cookie');
    }
    if(cookieBar.length){
        cookieBar.remove();
    }
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}