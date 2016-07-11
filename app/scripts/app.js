import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'bxslider';
import 'jquery-sticky';
import 'magnific-popup';
import 'jquery-ui/core';
import 'jquery-ui/widget';
import 'jquery-ui/effect';
import 'jquery-ui/mouse';
import 'jquery-ui/button';
import 'jquery-ui/accordion';
import 'jquery-ui/slider';
import 'jquery-ui/spinner';
import Parallax from 'scroll-parallax';
import 'jquery-validation';


$(() => {
	svg4everybody();

	const p = new Parallax('.parallax__image', {
		offsetYBounds: 10,
		intensity: 10,
		center: 0.5,
		safeHeight: 0.05
	}).init();


	const carousel = $('.carousel-first');

	carousel.bxSlider({
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		slideWidth: 300,
		pager: false,
		infiniteLoop: true,
		adaptiveHeight: true
	});

	const carouselSecond = $('.carousel-second');

	carouselSecond.bxSlider({
		minSlides: 4,
		maxSlides: 4,
		moveSlides: 1,
		slideWidth: 300,
		pager: false,
		infiniteLoop: true,
		adaptiveHeight: true
	});






	// Tabs

	$('.tabs__link').click(function (event) {
		event.preventDefault();
		$(this).addClass('tabs__link_active');
		$(this).siblings().removeClass('tabs__link_active');
		const tab = $(this).attr('href');
		$('.tabs__tab').not(tab).removeClass('tabs__tab_active').hide();
		$(tab).fadeIn().addClass('tabs__tab_active').show();

		carouselSecond.reloadSlider();

	});


	// Product slider

	$('.product-slider__list').bxSlider({
		mode: 'fade',
		controls: false,
		pagerCustom: '.product-slider__thumbs'
	});


	// Video carousel

	const videoSlider = $('.video__slider');

	videoSlider.bxSlider({
		minSlides: 3,
		maxSlides: 3,
		moveSlides: 1,
		slideWidth: 300,
		slideMargin: 65,
		pager: false,
		infiniteLoop: true,
		adaptiveHeight: true
	});

	const latestNews = $('.news_latest-news .news__list');

	latestNews.bxSlider({
		minSlides: 2,
		maxSlides: 2,
		moveSlides: 1,
		slideWidth: 500,
		slideMargin: 30,
		pager: false,
		infiniteLoop: true,
		adaptiveHeight: true
	});

	// Menu

	const menu = $('.header__bottom');

	menu.sticky({
		topSpacing: 0
	});


	// Feedback

	$('.feedback__button').click(function () {
		$('.messenger').removeClass('messenger_active');
		$('.messenger').addClass('messenger_active');
	});

	$('.messenger__close').click(function () {
		$('.messenger').toggleClass('messenger_active');
	});


	// Popup

	$('.phone__link_popup').magnificPopup({
		type: 'inline'
	});


	// Image Video popups


	$('.product-slider__item-link, .articles-full__image a, .news-full__item-image a, .news__item-image a, .article__image-link').magnificPopup({
		type: 'image',
		mainClass: 'image-popup'
		// gallery: {
		// 	enabled: true
		// }
	});

	$('.video__link, .articles__item_video a').magnificPopup({
		type: 'iframe',
		mainClass: 'video-popup',
		preloader: false
	});

	$('.side-banner_video a').magnificPopup({
		type: 'iframe',
		mainClass: 'video-popup',
		preloader: false
	});


	// Order popup

	// $('.button_order-popup').magnificPopup({
	// 	type: 'inline',
	// 	mainClass: 'order-popup'
	// });


	// search

	const search = $('.search__icon');
	// const searchWrap = $('.search__w');
	const searchForm = $('.search__form');

	search.click(function (e) {
		e.preventDefault();
		// searchWrap.toggleClass('search__w_active');
		searchForm.toggleClass('search__form_active');
	});


	// Side menu

	$('.side__menu-list').accordion({
		collapsible: true,
		active: 1,
		icons: {
			header: 'side__menu-icon',
			activeHeader: 'side__menu-icon side__menu-icon_active'
		}
	});

	$('.menu-side__menu-list').accordion({
		collapsible: true,
		active: 1,
		icons: {
			header: 'menu-side__menu-icon',
			activeHeader: 'menu-side__menu-icon menu-side__menu-icon_active'
		}
	});


	// Range slider

	$('.filter__range-slider').slider({
		min: 100,
		max: 99999,
		values: [ 0, 99999 ],
		range: true,
		step: 1,
		slide: function (event, ui) {
			$('.filter__price-input#price-from').val( ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '');
			$('.filter__price-input#price-to').val( ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '');

			$('.filter__price-val-from span').text(ui.values[0]);
			$('.filter__price-val-to span').text(ui.values[1]);

			// $('.filter__price-input#price-from').val(ui.values[0]);
			// $('.filter__price-input#price-to').val(ui.values[1]);
		}
		// change: function(event, ui) {
		// 	$('.filter__price-input#price-from').val(ui.values[0]);
		// 	$('.filter__price-input#price-to').val(ui.values[1]);
		// }
	});

	// $('.filter__price-input#price-from').val($('.filter__range-slider').slider('values', 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + "");
	// $('.filter__price-input#price-to').val($('.filter__range-slider').slider('values', 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + "");


	$('.filter__price-input#price-from').keyup(function () {
		$('.filter__range-slider').slider('values', 0, this.value);
	});
	$('.filter__price-input#price-to').keyup(function () {
		$('.filter__range-slider').slider('values', 0, this.value);
	});

	// Show more

	$('.link_show-more').click(function (e) {
		e.preventDefault();

		let $this = $(this);
		let $content = $this.parent().prev('.long-text');
		let linkText = $this.text();

		if (linkText === 'Узнать больше'){
			linkText = 'Свернуть';
			$content.switchClass('hideContent', 'showContent', 400);
		}else {
			linkText = 'Узнать больше';
			$content.switchClass('showContent', 'hideContent', 400);
		}

		$this.text(linkText);

		$('.long-text').toggleClass('long-text_hide');

	});



	// Grid List toggle

	function get_grid() {
		$('.catalog-view__list').removeClass('active');
		$('.catalog-view__grid').addClass('active');
		$('.products').addClass('products_grid');
	}
	function get_list() {
		$('.catalog-view__grid').removeClass('active');
		$('.catalog-view__list').addClass('active');
		$('.products').removeClass('products_grid');
	}


	$('.catalog-view__list').click(function (e){
		e.preventDefault();
		get_list();
	});

	$('.catalog-view__grid').click(function (e){
		e.preventDefault();
		get_grid();
	});


	// Spinner


	$('.spinner__input').spinner({
		min: 1,
		max: 100,
		icons: { down: 'spinner__minus', up: 'spinner__plus' }
	});


	$('.cart-spinner__input').spinner({
		min: 1,
		max: 100,
		icons: { down: 'cart-spinner__minus', up: 'cart-spinner__plus' }
	});

	$('.cart-spinner .cart-spinner__plus').html('+');
	$('.cart-spinner .cart-spinner__minus').html('-');


	// History order

	$('.order-history__show').click(function () {
		$(this).toggleClass('order-history__show_active');
		$(this).parents('.order-history__row').children('.order-history__row-w').toggleClass('order-history__row-w_active');
		$(this).parents('.order-history__row').children('.order-list').toggleClass('order-list_active');
	});


	// Enter


	$('.controls__link_enter').click(function (e) {
		e.preventDefault();
		$('.enter').addClass('enter_active');

	});

	$('.enter__close').click(function (e) {
		e.preventDefault();
		$('.enter').removeClass('enter_active');
	});


	// Validation

	const subscribeForm = $('#subscribe-form');
	const enterForm = $('#enter-form');
	const callbackForm = $('#callback-form');
	const subscribeMain = $('#subscribe-main');
	const feedbackForm = $('#feedback-form');
	const personalData = $('#personal-data');
	const registerForm = $('#register-form');

	// const orderForm = $('#order-form');

	subscribeForm.validate({
		rules: {
			subscribe_email : {
				required: true,
				email: true
			}
		},
		message: {
			subscribe_email: {
				required: '',
				email: ''
			}
		}
	});

	enterForm.validate({
		rules: {
			enter_login: {
				required: true
			},
			enter_password: {
				required: true
			}

		},
		messages: {
			enter_login: {
				required: ''
			},
			enter_password: {
				required: ''
			}
		}
	});


	callbackForm.validate({
		rules: {
			callback_name: {
				required: true
			},
			callback_phone: {
				required: true
			}
		},
		messages: {
			callback_name: {
				required: ''
			},
			callback_phone: {
				required: ''
			}

		}
	});

	subscribeMain.validate({
		rules: {
			subscribe_main: {
				required: true
			}
		},
		messages: {
			subscribe_main: {
				required: ''
			}

		}
	});

	feedbackForm.validate({
		rules: {
			feedback_name: {
				required: true
			},
			feedback_phone: {
				required: true
			},
			feedback_email: {
				required: true,
				email: true
			},
			feedback_noname: {
				required: true
			},
			feedback_message: {
				required: true
			}
		},
		messages: {
			feedback_name: {
				required: ''
			},
			feedback_phone: {
				required: ''
			},
			feedback_email: {
				required: '',
				email: ''
			},
			feedback_noname: {
				required: ''
			},
			feedback_message: {
				required: ''
			}
		}
	});

	personalData.validate({
		rules: {
			personal_name: {
				required: true
			},
			personal_email: {
				required: true,
				email: true
			},
			personal_phone: {
				required: true,
			},
			personal_city: {
				required: true
			},
			personal_postcode: {
				required: true
			},
			personal_street: {
				required: true
			},
			personal_house: {
				required: true
			},
			personal_appartment: {
				required: true
			},
			personal_pass: {
				required: true
			},
			personal_pass_new: {
				required: true
			},
			personal_pass_repeat: {
				required: true
			}
		},
		messages: {
			personal_name: {
				required: ''
			},
			personal_email: {
				required: '',
				email: ''
			},
			personal_phone: {
				required: '',
			},
			personal_city: {
				required: ''
			},
			personal_postcode: {
				required: ''
			},
			personal_street: {
				required: ''
			},
			personal_house: {
				required: ''
			},
			personal_appartment: {
				required: ''
			},
			personal_pass: {
				required: ''
			},
			personal_pass_new: {
				required: ''
			},
			personal_pass_repeat: {
				required: ''
			}

		}
	});

	// $.validator.seDefaults({
	// 	errorPlacement: function (error, element) {
	// 		element.parent()
	// 		attr("placeholder", error[0].outerText);
	// 	}
	// });

	registerForm.validate({
		rules: {
			reg_name: {
				required: true
			},
			reg_email: {
				required: true,
				email: true
			},
			reg_password: {
				required: true
			},
			reg_password_repeat: {
				required: true,
				equalTo: '#reg-pass'
			}
		},
		messages: {
			reg_name: {
				required: ''
			},
			reg_email: {
				required: '',
				email: ''
			},
			reg_password: {
				required: ''
			},
			reg_password_repeat: {
				required: '',
				equalTo: ''
			}
		}
	});

	// orderForm.validate({
	// 	rules: {
	// 		order_login: {
	// 			required: true
	// 		},
	// 		order_email: {
	// 			required: true,
	// 			email: true
	// 		},
	// 		order_phone: {
	// 			required: true
	// 		},
	// 		payment: {
	// 			required: true
	// 		},
	// 		delivery: {
	// 			required: true
	// 		},
	// 		city: {
	// 			required: true
	// 		},
	// 		postcode: {
	// 			required: true
	// 		},
	// 		street: {
	// 			required: true
	// 		},
	// 		house: {
	// 			required: true
	// 		}
	// 		appartment: {
	// 			required: true
	// 		},
	// 		order_message: {
	// 			required: true
	// 		}
	// 	},
	// 	messages: {
	// 		order_login: {
	// 			required: ''
	// 		},
	// 		order_email: {
	// 			required: '',
	// 			email: ''
	// 		},
	// 		order_phone: {
	// 			required: ''
	// 		},
	// 		payment: {
	// 			required: ''
	// 		},
	// 		delivery: {
	// 			required: ''
	// 		},
	// 		city: {
	// 			required: ''
	// 		},
	// 		postcode: {
	// 			required: ''
	// 		},
	// 		street: {
	// 			required: ''
	// 		},
	// 		house: {
	// 			required: ''
	// 		},
	// 		appartment: {
	// 			required: ''
	// 		},
	// 		order_message: {
	// 			required: ''
	// 		}
	// 	}
	// });




});
