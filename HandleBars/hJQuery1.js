$(function() {
		var data=[{
			author:'Vinod',
			tweet:'30 days to learn jquery'
		},
		{
			author:'Manoj',
			tweet:'30 Minutes to learn jquery Rocks!!'
		}];
		//grabbing the template
		var temp=Handlebars.compile($('#template').html());
		// console.log(temp);
		var dataObject=temp(data);
		console.log(dataObject);
		$('div.gridContainer').append(dataObject);
	});