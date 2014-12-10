
$(function () {
	$('#userText').keydown(function() {
		// alert("key Down");
		var userText=$('#userText').val();
		// alert(userText);

		//at this staze alert box does not display the first character you type..
		// it always shows one less character
		// whats the proble???????????

		// when we use keydown..then whatever is written inside the keydown
		// i.e. Function runs straight way..it does not wait to actually grab the
		// value..becuse here we grab the value after keydown . So it does not
		// give the  sufficient time to grab the value

		//Soltn...keyup event handler
		$('#userTextFeedback').html(userText);



	})
})
