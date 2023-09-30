$(function (){
    $(document).scroll(function (){
    var $nav = $(".navbar-fixed-top");
    $nav.toogleclass('scrolled',$(this).scrolltop()>$nav.height());
});
});