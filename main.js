$(document).ready(function(){

  $nav = $('.nav-menu');
  $toggleCollapse = $('.toggle-collapse');

  $toggleCollapse.click(function(){
    $nav.toggleClass("collapse");
  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    dots:false,
    nav:true,
    navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        780:{
            items:3,
            nav:true
        }
      }
})
});
