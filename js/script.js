/* Custom Javascript */
jQuery(document).ready(function($) {
	$(".go-bottom a").on("click", function() {
		$("html, body").animate({ scrollTop: $('#whatwedo').offset().top }, 1000);
	});
})