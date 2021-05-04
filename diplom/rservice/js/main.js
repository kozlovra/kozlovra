(function($) {

	"use strict";


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

  var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-ios-arrow-back'></span>","<span class='ion-ios-arrow-forward'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();



})(jQuery);

const selectElement = document.querySelector('#name-auto');
const targetElement = document.querySelector('#model-auto');
const audi =
[
  {
    "text"  : "A3",
    "value" : "a3"
  },
	{
    "text"  : "A4",
    "value" : "a4"
  },
	{
    "text"  : "A5",
    "value" : "a5"
  },
	{
    "text"  : "A6",
    "value" : "a6"
  },
	{
    "text"  : "S6",
    "value" : "s6"
  },
	{
    "text"  : "A7",
    "value" : "a7"
  },
	{
    "text"  : "S7",
    "value" : "s7"
  },
	{
    "text"  : "RS7",
    "value" : "RS7"
  },
	{
    "text"  : "Нет в списке",
    "value" : "none"
  }
];
const vw =
[
  {
    "text"  : "Polo",
    "value" : "polo"
  },
	{
    "text"  : "Tiguan",
    "value" : "tiguan"
  },
	{
    "text"  : "Passat ",
    "value" : "passat"
  },
	{
    "text"  : "Taureg ",
    "value" : "taureg"
  },
	{
    "text"  : "Jetta ",
    "value" : "jetta"
  },
	{
    "text"  : "Нет в списке",
    "value" : "none"
  }
];
const bmw =
[
	{
    "text"  : "2 серия",
    "value" : "2s"
  },
	{
    "text"  : "3 серия ",
    "value" : "3s"
  },
	{
    "text"  : "4 серия ",
    "value" : "4s"
  },
	{
    "text"  : "5 серия ",
    "value" : "5s"
  },
	{
    "text"  : "6 серия ",
    "value" : "6s"
  },
	{
    "text"  : "7 серия ",
    "value" : "7s"
  },
	{
    "text"  : "8 серия ",
    "value" : "8s"
  },
	{
    "text"  : "X серия ",
    "value" : "x"
  },
	{
    "text"  : "Z серия ",
    "value" : "z"
  },
	{
    "text"  : "M серия ",
    "value" : "m"
  },
	{
    "text"  : "Нет в списке",
    "value" : "none"
  }
];
const mercedess =
[
  {
    "text"  : "А-класс",
    "value" : "a"
  },
	{
    "text"  : "B-класс",
    "value" : "b"
  },
	{
    "text"  : "C-класс ",
    "value" : "c"
  },
	{
    "text"  : "S-класс ",
    "value" : "s"
  },
	{
    "text"  : "AMG ",
    "value" : "amg"
  },
	{
    "text"  : "GLE ",
    "value" : "gle"
  },
	{
    "text"  : "CLS ",
    "value" : "cls"
  },
	{
    "text"  : "Нет в списке",
    "value" : "none"
  }
];
const none =
[
  {
    "text"  : "Нет в списке",
    "value" : "none"
  }
];

selectElement.addEventListener('change', (event) => {
	targetElement.innerHTML = "";
  if (event.target.value == 'vw') {
		var changetElement = vw;
  }
	if (event.target.value == 'audi') {
		var changetElement = audi;
  }
	if (event.target.value == 'bmw') {
		var changetElement = bmw;
  }
	if (event.target.value == 'mercedess') {
		var changetElement = mercedess;
  }
	if (event.target.value == 'none') {
		var changetElement = none;
  }
	for(var i = 0, l = changetElement.length; i < l; i++){
		var option = changetElement[i];
		targetElement.options.add( new Option(option.text, option.value, option.selected) );
	}
});


window.addEventListener( "load", function () {
  const form = document.getElementById( "frm-smb" );
  form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
      document.location = "thanks.html";
  } );
} );