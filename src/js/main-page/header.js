$(document).on("scroll", function () {
    if ($(document).scrollTop() > 100) {
        $("header").addClass("small");
    } else {
        $("header").removeClass("small");
    }




    $(".navigation__list__item__link").on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: ($(target).offset().top)
        }, 2000);
    });
});

