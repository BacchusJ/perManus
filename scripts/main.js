$(document).ready(function() {
// this is the sticky header
  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));

  $(window).on("scroll", function(){

    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 70));
  });

  // SMOOTH SCROOL ON MENU tabs - this makes the menu sticly tab go to the sections on the page and do so smoothly and not cover the title of the section.


  $('.menu li a[href^="#"]').on('click', function(e){

      e.preventDefault();

      var target = $(this.hash);

      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top -75
        }, 1000);
      }
  });

  // MASONRY

  $('.grid').masonry({
      // options

      // because the class is call grid item and masonry will know what to edit
      itemSelector: '.grid-item',
      // ALIGNS ITEMS TO A HORIZONTAL WIDTH
      columnWidth: 120,
      //SETS THE WIDTH OF THE CONTAINER TO FIT THE AVAILABLE NUMBER OF COLUMNS
      fitWidth: true,
      // this is adding space to the sides of the images
      gutter: 0,


    });

    $('.grid2').masonry({
        // options

        // because the class is call grid item and masonry will know what to edit
        itemSelector: '.grid-item2',
        // ALIGNS ITEMS TO A HORIZONTAL WIDTH
        columnWidth: 120,
        //SETS THE WIDTH OF THE CONTAINER TO FIT THE AVAILABLE NUMBER OF COLUMNS
        fitWidth: true,
        // this is adding space to the sides of the images
        gutter: 0,


      });

      $('.grid1').masonry({
          // options

          // because the class is call grid item and masonry will know what to edit
          itemSelector: '.grid-item1',
          // ALIGNS ITEMS TO A HORIZONTAL WIDTH
          columnWidth: 120,
          //SETS THE WIDTH OF THE CONTAINER TO FIT THE AVAILABLE NUMBER OF COLUMNS
          fitWidth: true,
          // this is adding space to the sides of the images
          gutter: 0,


        });

    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      centerMode: true,
      slidesToShow: 3,
      fade: false,
      prevArrow:'<button type="button" class="slick-prev">Previous</button>',
      nextArrow:'<button type="button" class="slick-next">Previous</button>',

      responsive: [
          {
              breakpoint: 990,
              settings: {
                  slidesToShow: 2
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1
              }
          }
        ]

    });

// responsive menu start

var body = $('body');
var menuTrigger = $('.js-menu-trigger');
var mainOverlay = $('.js-main-overlay');


menuTrigger.on('click', function(){
        body.addClass('menu-is-active');
      });

      mainOverlay.on('click', function(){
            body.removeClass('menu-is-active');
          });

          $('.menu li a').on('click', function(){
                  $('body').removeClass("menu-is-active");
              });

});
