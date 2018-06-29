// When the document is loaded and ready..
$(document).ready(function () {
	// we want to set up 2 event listeners, one listening for our move moving over an element,
	// and another for listening for our mouse moving off of that element..
	$(".form-control ").hover(
		// This function handles focusing the input box when the mouse moves over the element
		function () {
			// focus the mouse inside the input element
			$(this).focus();
		},
		// This function handles focusing the input box when the mouse moves off the element
		function () {
			// unfocus the mouse from inside the input element
			$(this).blur();
		});
});