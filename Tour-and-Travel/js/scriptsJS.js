//========================================================================================================================================================


//========================================================================================================================================================


//========================================================================================================================================================


//========================================================================================================================================================


/// ДОБАВДЕНИЯ КЛАССА АКТИВ ДЛЯ БУРГЕРА
$('.header__burger').click(function (event) {
	$(this).toggleClass('active');
	$('.header__content').toggleClass('active');
	$('.header').toggleClass('active');
	if ($(this).hasClass('active')) {
		$('body').data('scroll', $(window).scrollTop());
	}
	$('body').toggleClass('lock');
	if (!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

//========================================================================================================================================================

//НАСТРОЙКИ СЛАЙДЕРА
$(document).ready(function () {
	$('.place-slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		centreMode: false,
		variableWidth: false,
		slidesToScroll: 2,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 2,

				}
			},
			{
				breakpoint: 479.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]

	});
});

$(document).ready(function () {
	$('.testimonials-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		centreMode: false,
		variableWidth: false,
		slidesToScroll: 1,
		variableWidth: false,
		responsive: [
			{
				breakpoint: 950,
				settings: {
					arrows: false,

				}
			}
		]

	});
});



//========================================================================================================================================================
