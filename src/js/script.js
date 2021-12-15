


  $(document).ready(function(){
      
    $('.reviews__wrapper').slick({
        slidesToShow: 3,
        arrows:true,
        appendArrows:'.reviews__arrows',
        prevArrow:'<button class="btn reviews__btn reviews__btn_prev"><img src="icons/reviews/left_arrow.svg" alt=""></button>',
        nextArrow:'<button class="btn reviews__btn reviews__btn-active reviews__btn_next"><img src="icons/reviews/right_arrow.svg" alt=""></button>',
        dots: true,
        appendDots: '.reviews__dots',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    });


    
  });

