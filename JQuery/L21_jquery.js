$(function  () {
	var text="@example.com";
	$('input[type="email"]').attr('value' ,text).focus(function  () {
		if ($(this).val()===text) {
			$(this).val('');
		};
	}).blur(function  () {
		if ($(this).val()==='') {
			$(this).val(text);
		};
	})
})