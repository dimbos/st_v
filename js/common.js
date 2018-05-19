$(function() {
	// в логотипе вырезаем одну букву и заключаем ее в тег each используем т.к. у нас несколько логотипов и их надо все обработать<span>
	$('.logo-litera').each(function(){
		var ths= $(this);
		ths.html(ths.html().replace('O', '<span>O</span>'));
	});

	$('.search').click(function(){
		$('.search-field').stop().slideToggle();
		$('.search-field input[type=text]').focus();
	})

	//по кнопке esc закрывается форма поиска
	$(document).keyup(function(e){
		if(e.keyCode == 27){
			$('.search-field').slideUp();
		}		
		//по клику на любом месте страницы закрываем форму поиска
	}).click(function(){
		$('.search-field').slideUp();
	});
	$('.search-wrap').click(function(e){
		e.stopPropagation();
	});

	$('.top-line').after('<div class="mobile-menu d-lg-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function(){
		$('.mobile-menu').stop().slideToggle();
	});

	$('.col-item').hover(function(){
		let ths = $(this);
		lnk = ths.closest('.col-item').find('h4 a');
		lnk.addClass('hover');
	}, function(){
		lnk.removeClass('hover');
	});

	$("body").prognroll({
		height: 3,
		color: "#ec1c1c",
		custom: false
	});

});
