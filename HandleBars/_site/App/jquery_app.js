$(function() {
		var obj=[
    {Name:"Vinod", Maths:40, English:50,Hindi:30,Science:20},
    {Name:"Sonu",Maths:50, English:50,Hindi:30,Science:20},
    {Name:"Anil",Maths:60, English:50,Hindi:30,Science:20},
    {Name:"Sunil",Maths:40, English:50,Hindi:30,Science:20},
    {Name:"Sachin",Maths:25, English:50,Hindi:30,Science:20},
    {Name:"Saurav",Maths:90, English:50,Hindi:30,Science:20},
    {Name:"Shivam",Maths:80, English:50,Hindi:30,Science:20},
    {Name:"Atishay",Maths:65, English:50,Hindi:30,Science:20},
    {Name:"Opti",Maths:45, English:50,Hindi:30,Science:20},
    {Name:"John",Maths:40, English:50,Hindi:30,Science:20} 
    
]

		//grabbing the template
		var temp=Handlebars.compile($('#template').html());
		console.log(temp);
		var dataObject=temp(obj);
		//console.log(dataObject);
		$('.tableClass').append(dataObject);

	});