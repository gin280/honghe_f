$(document).ready(function() {
	
	$(".w4 h1 img").click(function() {
		var tab = $(this).attr('data-title');
		$('#'+ tab).show().siblings().hide();
	})
})