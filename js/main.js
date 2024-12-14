$(function () {

	$('.header__menu-item').hover(
		function () {
			$(this).find('.header__submenu').stop(true, true).fadeIn(500);
		},
		function () {
			const submenu = $(this).find('.header__submenu');
			setTimeout(() => {
				if (!submenu.is(':hover') && !$(this).is(':hover')) {
					submenu.stop(true, true).fadeOut(500);
				}
			}, 500);
		}
	);
	$('.header__submenu').hover(
		function () {
			$(this).stop(true, true).fadeIn(500);
		},
		function () {
			$(this).fadeOut(500);
		}
	);


	$('.header-form__btn').on('click', function () {
		$('.header-form__inner').toggleClass('active');
	});

	$('.header__menu-btn').on('click', function () {
		$('.header__menu-list').toggleClass('active');
	});



});




const swiper = new Swiper('.swiper', {

	autoplay: {
		delay: 6500,
		disableOnInteraction: false,
	},
	speed: 600,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});