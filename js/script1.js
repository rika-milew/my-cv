$(document).ready(function() {
$('.header__burger,.header__menu').click(function(event) {
    $('.header__burger, .header__menu').toggleClass("active");
    $('body').toggleClass("lock");  
    })
});

function printText( el ){
        
    let letterTimeout = 120

    let text = el.innerHTML
    let i = 1

    let print__fn = function(){

            if( i <= text.length ){
                el.innerHTML = text.substr( 0, i );
                setTimeout( arguments.callee, letterTimeout );
            }

            i++;
        }

    print__fn() 
};

let el = document.getElementById( 'animation-text' )
printText( el );