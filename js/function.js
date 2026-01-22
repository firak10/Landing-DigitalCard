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

document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.querySelector(".floating-whatsapp-btn");
    const footer = document.getElementById("site-footer");

    if (!whatsappBtn || !footer) return;

    const margin = 20;

    function adjustWhatsappButton() {
        const footerRect = footer.getBoundingClientRect();
        const overlap = window.innerHeight - footerRect.top;

        if (overlap > 0) {
            whatsappBtn.style.bottom = overlap + margin + "px";
        } else {
            whatsappBtn.style.bottom = margin + "px";
        }
    }

    window.addEventListener("scroll", adjustWhatsappButton);
    window.addEventListener("resize", adjustWhatsappButton);
});


