$(document).ready(function() {
    $(".faq__aws").slideUp();
    $(".faq__item .faq__question").click(function(e) {
        // $(".faq__aws").slideUp();
        $(this).next().slideToggle();
        $(this).children(".pe-3").toggleClass("active");
    });
    $("body").addClass("abc");
});

// // Add active navbar
// var header = document.getElementById("navbarEgitech");
// var li = header.getElementsByClassName("homepage", "aboutUs", "services", "solution", "blog", "carrer", "contact");
// for (var i = 0; i < li.length; i++) {
//     li[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         if (current.length > 0) {
//             current[0].className = current[0].className.replace("active", "");
//         }
//         this.className += "active";
//     });
// }

// menu burger
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});