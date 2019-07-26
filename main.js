'use strict'
// if email sucsessful add popup that email was sucsfful if NO
// add popus sayin usucsessfull and highlight error?

document.getElementById('sendBtn').addEventListener('click', send)


function send () { 

    //varibles
    let Fname = document.getElementById('first-name').value.trim();
    let Lname = document.getElementById('last-name').value.trim();
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let full= " "
    let indicator = 0


    //email
    if (email.includes("@") && email.includes(".ca") || email.includes(".com")) {
        console.log('Correct Entery');
        full += " " + email; 
        indicator += 1
        //reset
        document.getElementById('email-error').innerHTML= '';
        
    } else {
        document.getElementById('email').value= '';
        document.getElementById('email-error').innerHTML= 'Invalid Email';
        
    }


    //first name
    
    if (Fname) {
        console.log('Correct Entery');
        full += " " + Fname; 
        indicator += 1
        //reset
        document.getElementById('Fname-error').innerHTML= '';

    } else {
        document.getElementById('first-name').value= '';
        document.getElementById('Fname-error').innerHTML= 'Invalid Name';
    }
    
    
    

    //last name
    if (Lname) {
        console.log('Correct Entery');
        full += " " + Lname; 
        indicator += 1
        //reset
        document.getElementById('Lname-error').innerHTML= '';

    } else {
        document.getElementById('last-name').value= '';
        document.getElementById('Lname-error').innerHTML= 'Invalid Name';

    }

    //message 
    if (message) {
        //reset
        document.getElementById('message-error').innerHTML= '';

    } else {
        document.getElementById('message').value= '';
        document.getElementById('message-error').innerHTML= 'Invalid Message';
    }


    // End of form
    if (indicator == 3){

    //error MESSAGE CLEARING
        //email
        document.getElementById('email-error').innerHTML= '';
        //First name  
        document.getElementById('Fname-error').innerHTML= '';
        //Last name
        document.getElementById('Lname-error').innerHTML= '';
        //Message
        document.getElementById('message-error').value= '';


    //Alert message
    console.log(full += " " + message)
    console.log('Message has been sent!')
    document.getElementById('success').innerHTML= 'Your message has been sent !';
        
    //clearing 
        //email
        document.getElementById('email').value= '';
        //First name
        document.getElementById('first-name').value= '';
        //Last name
        document.getElementById('last-name').value= '';
        //Message
        document.getElementById('message').value= '';
    } 

}


