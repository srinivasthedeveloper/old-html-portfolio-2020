
(function ($) {
  'use strict';

jQuery(document).ready(function($) {

	 //menu active
    var stellarnav =  $('.stellarnav');
      stellarnav.stellarNav({
        theme: 'light',
        breakpoint: 960,
        position: 'right',
        phoneBtn: '18009997788',
        locationBtn: 'https://www.google.com/maps'
      });

      //All Carousel active
      var hover_project_item = $(' #da-thumbs > li ');
      hover_project_item.hoverdir();
      var wlc_slide = $(".welcome-carousel");
      wlc_slide.owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        items:1,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        smartplay:1000,
        autoplay:true,
      });

      var project_slide = $(".portfolio-carousel");
      project_slide.owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        smartplay:1000,
        autoplay:true,
         navText:["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],
         responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
         }
      });

      var project_slide2 = $(".portfolio-carousel2");
      project_slide2.owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        items:4,
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        smartplay:1000,
        autoplay:true,
         navText:["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],
         responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
         }
      });


      var banner_slide = $(".banner-carousel");
      banner_slide.owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        animateIn:'fadeInUp',
        autoplay:true,
        items:1,
        navText:["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],

      });

      var testimonials = $(".testimonials");
      testimonials.owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        animateIn:'fadeInRight',
        animateOut:'fadeInRight',
        autoplay:true,
        items:1,
        navText:["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],

      });

      var blogs = $(".blogs");
      blogs.owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
        margin:30,
        
        navText:["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],
        responsive:{
          0:{
            items:1
          },
          800:{
            items:2
          },
          1000:{
            items:3
          }
        }

      });

      var logos = $(".logos");
      logos.owlCarousel({
        loop:true,
        nav:false,
        dots:false,
        autoplay:true,
        responsive:{
          0:{
            items:1
          },
          800:{
            items:3
          },
          1000:{
            items:5
          }
        }
        
      });


      //==welcome_area animation==\\
    wlc_slide.on('translate.owl.carousel', function() {
        $('.welcome-carousel .wlc-title h1').removeClass('fadeInDown animated').hide();
        $('.welcome-carousel .wlc-title p').removeClass('fadeInDown animated').hide();
        $('.welcome-carousel .wlc-title a').removeClass('fadeInDown animated').hide();
        $('.welcome-carousel h1.wlc-filltext').removeClass('fadeInDown animated').hide();
    });
    wlc_slide.on('translated.owl.carousel', function() {
        $('.owl-item.active .wlc-title h1').addClass('fadeInDown animated').show();
        $('.owl-item.active .wlc-title p').addClass('fadeInDown animated').show();
        $('.owl-item.active .wlc-title a').addClass('fadeInDown animated').show();
        $('.owl-item.active h1.wlc-filltext').addClass('fadeInDown animated').show();
    });


    var play_btn =  $('#play-video');
    var play_btn_overlay =  $('#video-overlay');
    var play_btn_overlay_close =  $('.video-overlay, .video-overlay-close');
    var play_btn_overlay_open =  $('.video-overlay.open');
    play_btn.on('click', function(e){
      e.preventDefault();
      play_btn_overlay.addClass('open');
      
    });
    play_btn_overlay_close.on('click', function(e){
      e.preventDefault();
      close_video();
    });



    //modal video button active
    play_btn.modalVideo();

    //wow animations active here
    new WOW().init();



    //current class adding 
    var navbarmneuclass = $('.navbarmneuclass');
    navbarmneuclass.onePageNav();


  	var preloader = $('.preloader');
    function preloader_func(){
        preloader.delay(200).fadeOut(500);
    }
    preloader_func();


  	var slide_widgest  = $("#slide-widgest");
  	var grid_side_open = $("#grid-side");
  	var close_btn      = $("#close-btn");
  	var side_content   = $("#side-content");
    grid_side_open.on('click', function(){
    	slide_widgest.addClass("active");
    	side_content.addClass("active");
    });
    close_btn.on('click', function(){
    	slide_widgest.removeClass("active");
    	side_content.removeClass("active");
    });


    
    // Start numbers animate at fun-facts section //
    var facts   = $("#facts");
    var number1 = $("#number_1");
    var number2 = $("#number_2");
    var number3 = $("#number_3");
    var number4 = $("#number_4");
    facts.appear(function() {
        number1.animateNumber({
            number: 6853
        }, 2200);
        number2.animateNumber({
            number: 120
        }, 2200);
        number3.animateNumber({
            number: 345
        }, 2200);
        number4.animateNumber({
            number: 195
        }, 2200);
    }, {
        accX: 0,
        accY: -150
    });

    function stickyNav() {
        //fixed nav bar active
        window.onscroll = function () {
            myFunction()
        };
        var header = document.getElementById("header");
        var sticky = header.offsetTop;

        function myFunction() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        }
    }
    stickyNav();

    $('#circle1').circleProgress({
      value: 0.6,
      fill: {
        color: '#08d665'
      },
      emptyFill: '#ffffff',
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
  });


    $('#circle2').circleProgress({
      value: 0.7,
      fill: {
        color: '#08d665'
      },
      emptyFill: '#ffffff',
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
  });


    $('#circle3').circleProgress({
      value: 0.3,
      fill: {
        color: '#08d665'
      },
      emptyFill: '#ffffff',
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(30 * progress) + '<i>%</i>');
  });


    $('#circle4').circleProgress({
      value: 0.9,
      fill: {
        color: '#08d665'
      },
      emptyFill: '#ffffff',
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
  });




    $('.mesonry-grid').masonry({
          // options
          itemSelector: '.col-lg-6',
          horizontalOrder: true
        });

    //current class adding 
    var navbarmneuclass = $('.navbarmneuclass');
    navbarmneuclass.onePageNav();

    var portfolio_filter = $(".portfolio-filter li");
    var portfolio_list = $(".portfolio-list");
    var portfolio_list2 = $(".portfolio-list2");


    portfolio_filter.on('click',function(){
        portfolio_filter.removeClass("active");
        $(this).addClass("active");
        
        var filterValue= $(this).attr("data-filter");
        portfolio_list.isotope({
            filter:filterValue,
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.col-md-4',
                horizontalOrder:false,
            }
        });
    });
    
    portfolio_list.isotope({
        layoutMode: 'masonry',
        masonry: {
            columnWidth: '.col-md-4',
            horizontalOrder:false,
        }
    });


 });
    

    //jquery load function start
    jQuery(window).on("load", function() {
        
    });

/*----- cart-plus-minus-button -----*/
$(".cart-plus-minus").append('<span class="dec qtybutton">-</span><span class="inc qtybutton">+</span>');
$(".qtybutton").on("click", function () {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  if ($button.text() == "+") {
    var newVal = parseFloat(oldValue) + 1;
  } else {
    // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
  }
  $button.parent().find("input").val(newVal);
});


// Order button

document.querySelectorAll('.truck-button').forEach(button => {
    button.addEventListener('click', e => {

        e.preventDefault();
        
        let box = button.querySelector('.box'),
            truck = button.querySelector('.truck');
        
        if(!button.classList.contains('done')) {
            
            if(!button.classList.contains('animation')) {

                button.classList.add('animation');

                gsap.to(button, {
                    '--box-s': 1,
                    '--box-o': 1,
                    duration: .3,
                    delay: .5
                });

                gsap.to(box, {
                    x: 0,
                    duration: .4,
                    delay: .7
                });

                gsap.to(button, {
                    '--hx': -5,
                    '--bx': 50,
                    duration: .18,
                    delay: .92
                });

                gsap.to(box, {
                    y: 0,
                    duration: .1,
                    delay: 1.15
                });

                gsap.set(button, {
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });

                gsap.to(button, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: .2,
                    delay: 1.25,
                    onComplete() {
                        gsap.timeline({
                            onComplete() {
                                button.classList.add('done');
                            }
                        }).to(truck, {
                            x: 0,
                            duration: .4
                        }).to(truck, {
                            x: 40,
                            duration: 1
                        }).to(truck, {
                            x: 20,
                            duration: .6
                        }).to(truck, {
                            x: 96,
                            duration: .4
                        });
                        gsap.to(button, {
                            '--progress': 1,
                            duration: 2.4,
                            ease: "power2.in"
                        });
                    }
                });
            }
            setTimeout(suc,4650);

        }
        else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': .5,
                '--box-o': 0,
                '--truck-y': 0,
                '--truck-y-n': -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
        }

    });
});
function suc()
{
    // this below line is to submit data
    document.getElementById('ordernowform').submit();
    // alert("Order Placed...!");
}


}(jQuery));


