$( document ).ready(function() {
	$('.mobile-menu button').on('click', function(){
		$('.desktop-menu').toggleClass('show');
	});
});