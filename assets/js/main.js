$(document).ready(function () {
	$('.header-menu__btn').on('click', function () {
		$(this).toggleClass('active')
		$('.header-nav').toggleClass('active')
	})

	$(".accordion-header").on('click', function () {
		const $this = $(this),
			parent = '.accordion-item',
			show = '.accordion-body'
		$this.parent(parent).toggleClass('active')
		$this.parent(parent).children(show).slideToggle(300)
	});
	$(".header-item").on('click', function () {
		$(this).toggleClass('show-menu')
		$(this).children('.header-item__menu').slideToggle(300)
	});
})
