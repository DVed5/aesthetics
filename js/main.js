$(function () {

	// Обработка кнопки формы
	$('.header-form__btn').on('click', function () {
		$('.header-form__inner').toggleClass('active');
	});

	// Обработка кнопки мобильного меню
	$('.header__menu-btn').on('click', function () {
		$('.header__menu-list').toggleClass('active');
	});

	let submenuTimeout;

	function toggleSubmenuBehavior() {
		if ($(window).width() >= 1140) {
			// Включаем hover-логику для экранов >= 1140px
			$('.header__menu-item').off('click').hover(
				function () {
					$(this).find('.header__submenu').stop(true, true).fadeIn(300);
				},
				function () {
					$(this).find('.header__submenu').stop(true, true).fadeOut(300);
				}
			);
		} else {
			// Для экранов < 1140px отключаем hover и добавляем клик
			$('.header__menu-item').off('mouseenter mouseleave').on('click', function (e) {
				e.stopPropagation(); // Предотвращаем всплытие кликов
				const submenu = $(this).find('.header__submenu');

				// Очищаем предыдущую задержку
				clearTimeout(submenuTimeout);

				if (submenu.hasClass('active')) {
					submenu.removeClass('active').fadeOut(150);
				} else {
					$('.header__submenu').removeClass('active').fadeOut(150);
					submenuTimeout = setTimeout(() => {
						submenu.addClass('active').fadeIn(150);
					}, 150);
				}
			});

			// Закрытие подменю и меню при клике вне меню
			$(document).on('click', function () {
				clearTimeout(submenuTimeout);
				$('.header__submenu').removeClass('active').fadeOut(150);
				$('.header__menu-list').removeClass('active');
			});

			// Предотвращаем закрытие при клике внутри меню
			$('.header__menu,.header__menu-btn').on('click', function (e) {
				e.stopPropagation();
			});
		}
	}

	// Инициализация поведения
	toggleSubmenuBehavior();

	// Перезапуск логики при изменении размеров окна
	$(window).on('resize', toggleSubmenuBehavior);
});



// Слайдер
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