
$(document).ready(function(){
    $('.carousel').slick(
        {
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 290,
            prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
            nextArrow: '<button type="button" class="slick-next">&#10095;</button>'
        }
    );
});