$(function() {
		var data=[{
			author:'Vinod Spiky',
			tweet:'<strong>30</strong> days to learn jquery Rocks'
		},
		{
			author:'Vinod Lol',
			tweet:'<strong>69 </strong>days to learn jquery Rocks'
		}
		];

		//grabbing the template
		var temp=Handlebars.compile($('#template').html());
		//console.log(temp);
		var dataObject=temp(data);
		//console.log(dataObject);
		$('ul.tweets').append(dataObject);

	});