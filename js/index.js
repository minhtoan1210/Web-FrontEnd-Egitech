$(document).ready(function() {
    $(".faq__aws").slideUp();
    $(".faq__item .faq__question").click(function(e) {
        // $(".faq__aws").slideUp();
        $(this).next().slideToggle();
        $(this).children(".pe-3").toggleClass("active");
    });
    $("body").addClass("abc");
});