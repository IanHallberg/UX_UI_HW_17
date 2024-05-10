
console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
    $(window).scroll(function() {
        $('.scrollFade').each(function() {
            var position = $(this).offset().top;
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();

            // Check if the element is in the view area
            if (position < scrollPosition + windowHeight - 20) 
                {
                $(this).addClass('fadeInUp-animation');
                $(this).removeClass('hide');
            }
        });
    });
});