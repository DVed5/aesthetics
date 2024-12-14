$(function () {

	let submenuTimeout;

	function toggleSubmenuBehavior() {
		if ($(window).width() >= 1140) {
			// Включаем hover-логику для экранов >= 1140px
			$('.header__menu-item').off('click').hover(
				function () {
					$(this).find('.header__submenu').stop(true, true).fadeIn(500);
				},
				function () {
					$(this).find('.header__submenu').stop(true, true).fadeOut(500);
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
					// Скрываем подменю без задержки
					submenu.removeClass('active').fadeOut(300);
				} else {
					// Закрываем другие подменю
					$('.header__submenu').removeClass('active').fadeOut(300);

					// Добавляем задержку для отображения текущего подменю
					submenuTimeout = setTimeout(() => {
						submenu.addClass('active').fadeIn(300);
					}, 300); // Задержка 300ms
				}
			});

			// Закрытие подменю при клике вне меню
			$(document).on('click', function () {
				clearTimeout(submenuTimeout); // Очищаем задержку
				$('.header__submenu').removeClass('active').fadeOut(300);
			});
		}
	}

	// Инициализация поведения
	toggleSubmenuBehavior();

	// Перезапуск логики при изменении размеров окна
	$(window).on('resize', toggleSubmenuBehavior);

	// Обработка кнопки формы
	$('.header-form__btn').on('click', function () {
		$('.header-form__inner').toggleClass('active');
	});

	// Обработка кнопки мобильного меню
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