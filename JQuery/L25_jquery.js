$(function () {
	$(':text').focusin(function () {
	$(this).css('background-color' , 'red');
			})


	$(':text').focusout(function () {					//.blur can be used
	$(this).css('background-color' , '#fff');
			})

	$(':button').click(function  () {
		$(this).attr('value','Please wait..');
		$(this).attr('disabled','true');
	});
			


})