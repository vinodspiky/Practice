$(function() {
		var data=[{
			author:'Vinod Spiky',
			tweet:'30 days to learn jquery Rocks'
		},
		{
			author:'Vinod Lol',
			tweet:'69 days to learn jquery Rocks'
		}
		];

		//grabbing the template
		var temp=Handlebars.compile($('#template').html());
		//console.log(temp);
		var dataObject=temp(data);
		//console.log(dataObject);
		$('ul.tweets').append(dataObject);

	});