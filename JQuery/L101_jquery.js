$(function  () {
	$('#buttonLoad').click(function 
	 () {
		$.ajax({//parameter are given here
			url:'L27_fontSwitcher.html',//the page i want to load
			// this fun have the data of the url page
			success:function(data) {
				$('#content').html(data);
			}

		})
	})
		
	
})