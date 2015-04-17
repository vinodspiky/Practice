$(function() {
		
        $.getJSON("http://localhost:4000/App2/studentDetails.json", function(obj){

            console.log(obj);
            //     console.log("hi");

            // $.each(obj,function(key,value) {
            //     console.log("hiiiiii");
            //     $('#divId').append("<li>"+value.name+"</li>");
            })
            
        });

		//grabbing the template
		// var temp=Handlebars.compile($('#template').html());
		// console.log(temp);
		// // var dataObject=temp(obj);
		// //console.log(dataObject);
		// $('.tableClass').append(dataObject);

