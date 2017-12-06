// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){ //do what's inside when the document is ready
$("#newsletter-signup").validate( {  
    rules: {  //include the rules that must be followed here
        "email": {  //the email_1 element in the #email_form should meet the following conditions:
            required: true,  //email_1 is required
            email: true      //email_1 needs to be an email address
        },
        "firstname": {
            required: true  //full_name is required
        },
        "lastname":{
            required: true
        }  
    },

    messages: {  //include here the customized messages to alert the user to an input error
        //for each rule set above, you'll have a messages set here
        //to have truly customized messages, you'll have a 1:1 ratio of rules and messages
        "email": {
            required: "Please enter your email address",  //if this rule is not met, this message will be displayed
            email: "Please enter a valid email"
        },
        "firstname": {
            required: "Please enter your first name"
        },
        "lastname":{
            required: "Please enter your last name"
        }   
    
    }

})


});