$(function() {
		var data={				
				"avgAnnualReturn":[
					{
						'1yr':'10',
						'3yr':'20',
						'5yr':'30',
					}
				]
		};
		//grabbing the template
		var temp=Handlebars.compile($('#template').html());
		// console.log(temp);
		var dataObject=temp(data);
		console.log(dataObject);
		$('div.gridContainer').append(dataObject);
	});