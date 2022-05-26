function validation()
{
    var name = document.getElementById("contact_name").value;
    var phone = document.getElementById("phone_number").value;
    var email = document.getElementById("contact_email").value;
    var message = document.getElementById("contact_subject").value;
    var error = document.getElementById("error_message");
    var text;
    
    error.style.padding = "10px";

    if(name.length < 3){
        text = "Please enter a valid name";
        error.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length < 8){
        text = "Please enter a valid phone number";
        error.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please enter a valid email";
        error.innerHTML = text;
        return false;
    }

    if(message.length < 3){
        text = "Please enter a valid message";
        error.innerHTML = text;
        return false;
    }

    alert("form submitted successfully")

    return true;

} 