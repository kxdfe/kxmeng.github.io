$("#sidebar-left li").click(function() {
	$('.sidebar-active').removeClass('sidebar-active');
	$(this).addClass('sidebar-active');
	$('.active-topic').removeClass('active-topic');
	$('div#' + $(this).attr('id')).addClass('active-topic');
});