$(function () {
	// $('#file').change(function  () {
		// $('#upload').removeAttr('disabled')
	// })
// works for first 2 commented line in html file....now generalised version

// $('input[type="file"]').next().attr('disabled','disabled');
//disabled the next button of every input type=file;

$('input[type="file"]').change(function  () {
	$(this).next().removeAttr('disabled');
})

.next().attr('disabled','disabled');
})