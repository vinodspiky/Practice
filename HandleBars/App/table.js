$(function() {
		var obj=[
    {Name:"Vinod",Maths:80, English:60,Hindi:70,Science:80,MaximumMarks:100,Total:20,Result:"pass"},
    {Name:"Sonu",Maths:50, English:50,Hindi:30,Science:20,MaximumMarks:100,Total:20,Result:"pass"},
    {Name:"Anil",Maths:40, English:50,Hindi:30,Science:20,MaximumMarks:100,Total:20,Result:"pass"},
    {Name:"Sunil",Maths:47, English:50,Hindi:30,Science:20,MaximumMarks:100,Total:20,Result:"pass"},
    {Name:"Sachin",Maths:25, English:50,Hindi:30,Science:20,MaximumMarks:100,Total:20,Result:"pass"},
    {Name:"Saurav",Maths:90, English:50,Hindi:30,Science:20,MaximumMarks:100,Total:20,Result:"pass"},
    {Name:"Shivam",Maths:20, English:50,Hindi:50,Science:20,MaximumMarks:100,Total:20,Result:"pass"},
    {Name:"Atishay",Maths:65, English:50,Hindi:30,Science:20,MaximumMarks:100,Total:20,Result:"pass"},
    {Name:"Opti",Maths:30, English:50,Hindi:30,Science:20,MaximumMarks:100,Total:20,Result:"pass"},
    {Name:"John",Maths:49, English:50,Hindi:30,Science:20,MaximumMarks:100,Total:20,Result:"pass"} 
    
   
]




    
    //Create a custom function helper to set the color
Handlebars.registerHelper( "setColor", function (subject){
        if (subject<50)
            {    
            return 'failed';
            }

        else
            {
            return "pass";
            }
});


Handlebars.registerHelper("calculateTotal",function (subject) {
    subject.Total=subject.Maths+subject.English+subject.Hindi+subject.Science
    // console.log((subject.Maths+subject.English+subject.Hindi+subject.Science));
    // return ((subject.Maths+subject.English+subject.Hindi+subject.Science));
    console.log(subject.Total);
    return subject.Total;
    
})


Handlebars.registerHelper("findResult",function (subject,options) {
    if (subject.Maths<50 || subject.English<50||subject.Hindi<50||subject.Science<50) {
        console.log("fail");
        return "fail"
        
    }
    else{
        console.log("pass");
        return "pass"
        
    }
})

		//grabbing the template
		var temp=Handlebars.compile($('#template').html());
		// console.log(temp);
		var dataObject=temp(obj);
		// console.log(dataObject);
		$('.tableClass').append(dataObject);
        // console.log(dataObject);


        // var total=$(('#m5').val
        // $(('#m5').val

	});