

$(document).ready(function (){
    $(".owl-carousel").owlCarousel({
        items: 1,
        singleItem: true,
        itemsScaleUp : true,
        slideSpeed: 500,
        autoPlay: true,
        autoPlaySpeed: 500,
        autoPlayTimeout: 500


    });

    $('.item').animate({
        backgroundSize: '130%'
    }, 30000);


    var dot = $('.slideWrap .owl-dot');
    dot.each(function() {
        var index = $(this).index() + 1;
        if(index < 10){
            $(this).html('0').append(index);
        }else{
            $(this).html(index);
        }
    });




    var wrapper = document.querySelector('.wrapper');
    var img = document.querySelector('.glitchme');
    var count = Number(img.dataset.glitchCount);

    img.addEventListener('load', function(){
        for(var i = 0; i < count; i++){
            var glitch = document.createElement('div');

            // add cloned image to div wrapper
            glitch.className += ' glitched glitch-'+i;
            glitch.style = 'background-image: url('+img.getAttribute('src')+'); width: '+img.width+'px; height:'+img.height+'px';

            wrapper.appendChild(glitch);
        }
    });

    setInterval(function(){
        var glitches = document.querySelectorAll('.glitched');
        for(var i = 0; i < glitches.length; i++){
            glitches[i].classList.toggle('glitch-pause');
        }
    }, 3000);

});

/*=============parallax==========*/
$(window).scroll(function () {
    var st = $(this).scrollTop();
$('.about-description').css({
    "transform": "translate(0%, " + -st / 50 + "%"
});

$('.story-image').css({
    "transform": "translate(0%, " + st / 40 + "%"
});

$('.menu-description').css({
    "transform": "translate(0%, " + -st / 70 + "%"
 });

 $('.kitchen-img').css({
     "transform": "translate(0%, " + -st / 50 + "%"
 });

$('.chief-img').css({
    "transform": "translate(0%, " + -st / 40 + "%"
 });

});

/*=============PRELOADER========*/


$(document).ready(function() {
    $("#preloader").delay(5000).fadeOut("slow"); // will fade out the white DIV that covers the website.
});