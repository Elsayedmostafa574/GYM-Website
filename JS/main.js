$(document).ready(function () {
  $(window).scroll(function () {
    let x = $(window).scrollTop()
    if (x > 500) {
      $('.navbar').css({

        'opacity': '1',

      })
    } else {
      $('.navbar').css({
        'background': 'transparent',
        'opacity': '0.9'
      })
    }
  })
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500
  });
  jQuery("#fittext").fitText();


})

new WOW().init();