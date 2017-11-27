// https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){ //do what's inside when the document is ready
$("#visitor_survey_form").validate( {  
    rules: {  //include the rules that must be followed here
        "email": {  //the email_1 element in the #email_form should meet the following conditions:
            required: true,  //email_1 is required
            email: true      //email_1 needs to be an email address
        },
        "name": {
            required: true  //full_name is required
        },
        "password":{
            required: true,
            minlength: 5
        },
        "password2":{
            required: true,
            minlength: 5,
            equalTo: "#password"
        },
        "telephone":{
            required: true,
            minlength: 5
        },
        "birthday":{
            required: true,
        },
        "message":{
            required: true,
            minlength: 20
        },
        "media":{
            required: true
        },
        "gender":{
            required: true
        },
        "color":{
            required: true
        },
        "hello-button":{
            required: true
        },
        "updates-heading":{
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
        "name": {
            required: "Please enter your full name"
        },
        "telephone":{
            required: "Please provide a telephone number.",
            minlength: "ARE YOU HERE?"
        },
        "password":{
            required: "Please provide a password.",
            minlength: "Your password must be at least 5 characters long."
        },
        "password2":{
            required:"Please re-enter your password.",
            minlength: "Your password must be at least 5 characters long.",
            equalTo: "Please enter the same password as above."
        },
        "birthday":{
            required: "Please provide a valid birthdate."
        },
        "message":{
            required: "Please provide a short story.",
            minlength: "Your short story must be at least 20 characters long."
        }, 
        "media":{
            required: "Please select your favorite art mediums."
        },
        "gender":{
            required: "Please select one gender option."
        },
        "color":{
            required: "Please select your favorite color."
        },
        "hello-button":{
            required: "Please click the button."
        },
        "updates-heading":{
            required: "Please select one checkbox."
        }
    }

})


});