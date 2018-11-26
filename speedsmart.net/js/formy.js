/*
* Formy JS library
* by Luiszuno.com
*/
 
 jQuery(document).ready(function($) {

	// Hide messages 
	$("#formy-success").hide();
	$("#formy-error").hide();
	
	// on submit...
	$("#formy #submit").click(function() {
		
		// Required fields:
		
		//name
		var name = $("#name").val();
		if(name == "" || name == "Name"){
			//$("#name").focus();
			$("#formy-error").fadeIn().text("Error: Name required");
			$('#formy-error').delay(5000).fadeOut(400);
			return false;
		}
		
		// email
		var email = $("#email").val();
		if(email == "" || email == "Email"){
			//$("#email").focus();
			$("#formy-error").fadeIn().text("Error: Email required");
			$('#formy-error').delay(5000).fadeOut(400);
			return false;
		}
				
		// comments
		var comments = $("#comments").val();
		if(comments == "" || comments == "How can i help you?"){
			//$("#comments").focus();
			$("#formy-error").fadeIn().text("Error: Forgot the message?");
			$('#formy-error').delay(5000).fadeOut(400);
			return false;
		}
		

		var new_field1 = $("#host_name").val();
		var new_field2 = $("#host_url").val();
		var new_field3 = $("#server_country").val();
		var new_field4 = $("#server_city").val();
		var new_field5 = $("#connection").val();
		var new_field6 = $("#server_url").val();


		// send mail php
		var sendMailUrl = $("#sendMailUrl").val();
		
		// Retrieve values for to, from & subject at the form
		var to = $("#to").val();
		var from = $("#from").val();
		var subject = $("#subject").val();
		
		// Create the data string
		var dataString = 'name='+ name
						+ '&email=' + email        
						+ '&comments=' + comments
						+ '&to=' + to
						+ '&from=' + from
						+ '&subject=' + subject
						+ '&host_name=' + new_field1
						+ '&host_url=' + new_field2
						+ '&server_country=' + new_field3
						+ '&server_city=' + new_field4
						+ '&connection=' + new_field5
						+ '&server_url=' + new_field6;						         
		// ajax 
		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	// On success...
	 function success(){
	 	$("#formy-success").fadeIn().text("Your message has been sent!");
	 	$("#formy-error").hide();
	 	$("#formy fieldset").fadeOut();
	 }
	
    return false;
});


// Clears the label of the input on focus

function defaultInput(target, string){
	if((target).value == string){(target).value=''}
}

function clearInput(target, string){
	if((target).value == ''){(target).value=string}
}