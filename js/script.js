$(document).ready(function () {
	$("a[href='#']").on('click', function (e) {
		e.preventDefault()
	})

	$('header .navbar-nav .nav-item:not(.dropdown) a').on('click', function (e) {
		$('.navbar-collapse').collapse('hide')
	})
	$('header .navbar-nav .nav-item .dropdown-menu a').on('click', function (e) {
		$('.navbar-collapse').collapse('hide')
	})

	$('.eH-Area').each(function () {
		$(this).find('.eH').matchHeight()
		$(this).find('.eH2').matchHeight()
	})

	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 800)
		return false
	})

	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn()
		} else {
			$('.back-to-top').fadeOut()
		}
	})

	if ($('body').magnificPopup != undefined) {
		$('.popup-img').each(function () {
			// Find the corresponding h3 text
			var titleText = $(this).find('.menu-item-title h3').text()
			// Set the title attribute
			$(this).attr('title', titleText)
		})
		$('.popup-img').magnificPopup({
			type: 'image',
			mainClass: 'mfp-with-zoom',
			titleSrc: 'title',
			gallery: {
				enabled: true,
				preload: [0, 2],
				navigateByImgClick: true,
				arrowMarkup:
					'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				tPrev: 'Previous (Left arrow key)',
				tNext: 'Next (Right arrow key)',
				tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
			},
			zoom: {
				enabled: false,
				duration: 300,
				easing: 'ease-in-out',
				opener: function (openerElement) {
					return openerElement.is('img')
						? openerElement
						: openerElement.find('img')
				},
			},
		})
	}
})

$(window).ready(function () {
	$('.loader-area').fadeOut('slow')
})
