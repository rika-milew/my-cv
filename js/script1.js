$(document).ready(function() {
$('.header__burger,.header__menu').click(function(event) {
    $('.header__burger, .header__menu').toggleClass("active");
    $('body').toggleClass("lock");  
    })
});

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});