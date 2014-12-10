//hide function in jquery
$(function () {
	$('#hideMessage').click(function(){
		$('#message').hide();
	})
})
//See the color difference between click and hide..
//Actually click is an event handler and hide is a function