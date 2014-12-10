//change event handlers
$(function () {
	$('#list').change(function() {
		var listValue=$('#list').val();
		$('#listFeedback').html('You have selected: '+listValue);
		// alert('changed');
	})
})
