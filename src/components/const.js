export const settings = {
    // dots: true,
    infinite: false,
  //   lazyLoad:true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide:0,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite:false
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 3,
            infinite:false
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide:2,
            infinite:false
          }
        }
      ]
}