// jQuery를 활용한 인터렉션 ...
/*
$(document).ready(function(){

});
*/

var $item = $('.menu-item');
var $subItem = $(".sub-menu a");

$item.on('focusin mouseover', function () {
    $item.removeClass("menu-act");
    $(this).addClass('menu-act');
});

$item.attr("tabindex", "0");

$subItem.attr("class", "fas fa-angle-left");

$subItem.hover(function(){
    $(this).toggleClass("fa-angle-right");
});