/* Custom Javascript */
jQuery(document).ready(function($) {
	$(".go-bottom a").on("click", function() {
		$("html, body").animate({ scrollTop: $('#whatwedo').offset().top }, 1000);
	});

	$(".dropdownico").on("click", function() {
		if( $(this).parent().parent().find("li").first().hasClass("responsive") )
			$(this).parent().parent().find("li").removeClass("responsive");
		else
			$(this).parent().parent().find("li").addClass("responsive");
	});
})