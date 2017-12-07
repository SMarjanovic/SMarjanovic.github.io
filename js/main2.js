// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){ //do what's inside when the document is ready
$("#covenant-enforcement-form").validate( {  
    rules: {  //include the rules that must be followed here
       "address":{
           required: true 
       },
        "message":{
            required: true,
            minlength: 20
        },
        "firstname":{
            required: true  
        },
        "lastname":{
            required:true
        },
        "telephone":{
            required: true,
            phoneUS: true
        },
        "email": {  //the email_1 element in the #email_form should meet the following conditions:
            required: true,  //email_1 is required
            email: true      //email_1 needs to be an email address
        }
      
    },

    messages: {  //include here the customized messages to alert the user to an input error
        //for each rule set above, you'll have a messages set here
        //to have truly customized messages, you'll have a 1:1 ratio of rules and messages
        "address":{
            required: "Please provide the address of the alleged violation."
        },
        "message":{
            required: "Please provide a description of the alleged violation.",
            minlength: "Your description must be at least 20 characters long."
        },
        "firstname":{
            required: "Please enter your first name."
        },
        "lastname":{
            required: "Please enter your last name."
        }, 
        "telephone":{
            required: "Please provide a telephone number.",
            phoneUS: "Please enter a valid US telephone number."
        },
        "email": {
            required: "Please enter your email address",  //if this rule is not met, this message will be displayed
            email: "Please enter a valid email."
        }
       
      
       
    }

});


});