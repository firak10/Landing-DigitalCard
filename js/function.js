(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Preloader Effect */
	$window.load(function() {
	   $(".preloader").fadeOut(600);
    });
	
	/* Top Menu */
	$(document).on('click','#navigation ul li a, #responsive-menu ul li a',function(){
		var id = $(this).attr('href');
		var h = Math.ceil(parseFloat($(id).offset().top));
		$('body,html').stop().animate({
			scrollTop: h - 0
		}, 800);
		$(".navbar-collapse").collapse("hide");

		return false;
	});
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:''});
	
	/*OwlCarousels Testimonial Start*/
	$('#testimonial-slider').owlCarousel({
		loop: true,
		items: 2,
		margin: 30,
		responsiveClass: true,
		responsive : {
			0 : {
				items: 1
			},
			 
			768 : {
				items: 2
			}
		  },
		nav: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1000,
		navText: [ '<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
	});
	
	
	
})(jQuery);