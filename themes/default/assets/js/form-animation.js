$(window).on('load', function(){
    $(".form__input").val("");

    $(".form__input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("form__input--has-content");
        }else{
            $(this).removeClass("form__input--has-content");
        }
    })
});