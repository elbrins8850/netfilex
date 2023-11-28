var submit = document.getElementById("submitBtn")
submit.disabled= true
function valid(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var emailerr = document.getElementById("emailError");
    var passerr = document.getElementById("passError");
    if(email.indexOf("@") == -1 || email.length <= 0){
        emailerr.innerHTML= "please enter a vaild email"
        submit.disabled= true

    }
    else if(email.indexOf("@") > 1 && email.length > 0){
        emailerr.innerHTML= ""  
    }
    if(pass.length < 4 || pass.length > 30 ){
        passerr.innerHTML= "please enter a vaild pass"
        submit.disabled= true
    }
    else if(pass.length > 4 && pass.length < 30 ){
        passerr.innerHTML= ""
    }
    if(email.indexOf("@") > 1 && email.length > 0 && pass.length > 4 && pass.length < 30 ){
        submit.disabled= false

    }
}