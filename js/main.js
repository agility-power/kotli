$(function () {
  $('.offer-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          centerMode: true,
          infinite: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      }
      ],
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10">< defs ><style>.cls-1 {fill: #fff;fill-rule: evenodd;}</style></><path id="angle_right" class="cls-1" d="M975.907,320.768l-4.338-4.66a0.279,0.279,0,0,0-.428,0l-0.465.5a0.331,0.331,0,0,0,0,.46l3.658,3.93-3.658,3.931a0.322,0.322,0,0,0-.093.23,0.325,0.325,0,0,0,.093.23l0.465,0.5a0.279,0.279,0,0,0,.428,0l4.338-4.661A0.326,0.326,0,0,0,976,321a0.33,0.33,0,0,0-.093-0.23h0Zm0,0-3.482.23a0.325,0.325,0,0,0-.093-0.23L968,316.108a0.279,0.279,0,0,0-.428,0l-0.466.5a0.331,0.331,0,0,0,0,.46l3.658,3.93-3.658,3.931a0.331,0.331,0,0,0-.093.23,0.334,0.334,0,0,0,.093.23l0.466,0.5a0.279,0.279,0,0,0,.428,0l4.337-4.661a0.322,0.322,0,0,0,.093-0.23h0Zm0,0" transform="translate(-967 -316)"></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10">< defs ><style>.cls-1 {fill: #fff;fill-rule: evenodd;}</style></><path id="angle_right" class="cls-1" d="M975.907,320.768l-4.338-4.66a0.279,0.279,0,0,0-.428,0l-0.465.5a0.331,0.331,0,0,0,0,.46l3.658,3.93-3.658,3.931a0.322,0.322,0,0,0-.093.23,0.325,0.325,0,0,0,.093.23l0.465,0.5a0.279,0.279,0,0,0,.428,0l4.338-4.661A0.326,0.326,0,0,0,976,321a0.33,0.33,0,0,0-.093-0.23h0Zm0,0-3.482.23a0.325,0.325,0,0,0-.093-0.23L968,316.108a0.279,0.279,0,0,0-.428,0l-0.466.5a0.331,0.331,0,0,0,0,.46l3.658,3.93-3.658,3.931a0.331,0.331,0,0,0-.093.23,0.334,0.334,0,0,0,.093.23l0.466,0.5a0.279,0.279,0,0,0,.428,0l4.337-4.661a0.322,0.322,0,0,0,.093-0.23h0Zm0,0" transform="translate(-967 -316)"></svg></button>'
  })
  $('.response-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10">< defs ><style>.cls-1 {fill: #fff;fill-rule: evenodd;}</style></><path id="angle_right" class="cls-1" d="M975.907,320.768l-4.338-4.66a0.279,0.279,0,0,0-.428,0l-0.465.5a0.331,0.331,0,0,0,0,.46l3.658,3.93-3.658,3.931a0.322,0.322,0,0,0-.093.23,0.325,0.325,0,0,0,.093.23l0.465,0.5a0.279,0.279,0,0,0,.428,0l4.338-4.661A0.326,0.326,0,0,0,976,321a0.33,0.33,0,0,0-.093-0.23h0Zm0,0-3.482.23a0.325,0.325,0,0,0-.093-0.23L968,316.108a0.279,0.279,0,0,0-.428,0l-0.466.5a0.331,0.331,0,0,0,0,.46l3.658,3.93-3.658,3.931a0.331,0.331,0,0,0-.093.23,0.334,0.334,0,0,0,.093.23l0.466,0.5a0.279,0.279,0,0,0,.428,0l4.337-4.661a0.322,0.322,0,0,0,.093-0.23h0Zm0,0" transform="translate(-967 -316)"></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10">< defs ><style>.cls-1 {fill: #fff;fill-rule: evenodd;}</style></><path id="angle_right" class="cls-1" d="M975.907,320.768l-4.338-4.66a0.279,0.279,0,0,0-.428,0l-0.465.5a0.331,0.331,0,0,0,0,.46l3.658,3.93-3.658,3.931a0.322,0.322,0,0,0-.093.23,0.325,0.325,0,0,0,.093.23l0.465,0.5a0.279,0.279,0,0,0,.428,0l4.338-4.661A0.326,0.326,0,0,0,976,321a0.33,0.33,0,0,0-.093-0.23h0Zm0,0-3.482.23a0.325,0.325,0,0,0-.093-0.23L968,316.108a0.279,0.279,0,0,0-.428,0l-0.466.5a0.331,0.331,0,0,0,0,.46l3.658,3.93-3.658,3.931a0.331,0.331,0,0,0-.093.23,0.334,0.334,0,0,0,.093.23l0.466,0.5a0.279,0.279,0,0,0,.428,0l4.337-4.661a0.322,0.322,0,0,0,.093-0.23h0Zm0,0" transform="translate(-967 -316)"></svg></button>'
  })
  
  $('.select-style').styler();

  $('.menu-mobile__bar').on('click', function () {
    $('.menu-mobile').toggleClass('menu-mobile--active')
  })
})