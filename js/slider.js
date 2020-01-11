/* First Slider */

$('.single-item').slick({
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
    centerPadding: '600px'
});

/* second slider */
$('.center').slick(
  
    {
    infinite: true,
    autoplay: false,
    speed: 300,
    centerMode: true,
    dots: true,
    prevArrow: ".site-slider .slider-btn .prev",
    nextArrow: ".site-slider .slider-btn .next",
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
  }
);
 /* third slider */

 $('.carousel').carousel({
    interval: 20000,
    prev: ".carousel-control-prev",
    next: ".carousel-control-next" 
  })
