$(function () {

	function change_font (element,size) {
		var currentFontSize=parseInt(element.css('font-size'));
		//alert(currentFontSize);
		if (size==='smaller') {
			var newSize=currentFontSize-2;
		}else if(size==='larger') {
			var newSize=currentFontSize+2;
		};
		// alert(newSize);

		element.css('font-size',newSize+'px');

		
	}


	$('#smaller').click(function  () {
		change_font($('p'),'smaller');
		
	});


	$('#larger').click(function  () {
		change_font($('p'),'larger');
		
	});


})