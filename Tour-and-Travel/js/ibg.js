function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();




// ФИЛЬТРАЦИЯ ФАЙЛОВ 

$('.portfolio__list__item').click(function (event) {
	var i = $(this).data('filter');
	if (i == 1) {
		$('.portfolio__column').show();
	} else {
		$('.portfolio__column').hide();
		$('.portfolio__column.f-' + i).show();
	}
	$('.portfolio__list__item').removeClass('active');
	$(this).addClass('active');

	return false;
});



// ПРОКРУТКА ГЛАВНОГО ФОТО
$(window).scroll(function (event) {
	var s = 0 - $(this).scrollTop() / 3;
	$('.mainblock-img').css('transform', 'translate3d(0,' + s + 'px,0)');
});




//ПЕРЕХОД ПО КЛИКУ
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.header-menu').hasClass('active')) {
		$('.header-menu,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});