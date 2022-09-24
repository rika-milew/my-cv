$(document).ready(function() {
$('.header__burger,.header__menu').click(function(event) {
    $('.header__burger, .header__menu').toggleClass("active");
    $('body').toggleClass("lock");  
    })
});

