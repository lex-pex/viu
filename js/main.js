(function($) {
	"use strict"

	// Mobile dropdown
	$('.has-dropdown>a').on('click', function() {
		$(this).parent().toggleClass('active');
	});

	// Aside Nav
	$(document).click(function(event) {
		if (!$(event.target).closest($('#nav-aside')).length) {
			if ( $('#nav-aside').hasClass('active') ) {
				$('#nav-aside').removeClass('active');
				$('#nav').removeClass('shadow-active');
			} else {
				if ($(event.target).closest('.aside-btn').length) {
					$('#nav-aside').addClass('active');
					$('#nav').addClass('shadow-active');
				}
			}
		}
	});

	$('.nav-aside-close').on('click', function () {
		$('#nav-aside').removeClass('active');
		$('#nav').removeClass('shadow-active');
	});


	$('.search-btn').on('click', function() {
		$('#nav-search').toggleClass('active');
	});

	$('.search-close').on('click', function () {
		$('#nav-search').removeClass('active');
	});

	// Parallax Background
	$.stellar({
		responsive: true
	});
})(jQuery);

// Share Buttons
url = document.location.href;
shareButtons =
'<div class="soc share-btns">\n' +
'<a href="https://vk.com/share.php?url=' + url + '" target="_blank" title="Vk" class="fa fa-vk"></a>\n' +
'<a href="http://www.facebook.com/sharer.php?u=' + url + '" target="_blank" title="Facebook" class="fa fa-facebook"></a>\n' +
'<a target="_blank" data-size="large" href="https://twitter.com/intent/tweet?url=' + url + '" data-url="url" data-lang="ru" class="fa fa-twitter"></a>\n' +
'</div>';
div = document.getElementsByClassName('share_buttons_insert');
div[0].innerHTML = shareButtons;
div[1].innerHTML = shareButtons;















