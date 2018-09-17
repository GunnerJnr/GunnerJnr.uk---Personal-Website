$(document).ready(function() {
	$(".header").height($(window).height());

	$(".navbar a").click(function() {
		$("body,html").animate(
			{ scrollTop: $($.attr(this, "href")).offset().top-56 },
			1000
		);
		return false;
	});
});
