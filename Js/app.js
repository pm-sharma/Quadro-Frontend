
// Javascript for Sliding Animation

const signUpBtn = document.getElementById('signUp');
const signInBtn = document.getElementById('signIn');
const container = document.getElementById('container');

signUpBtn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});
signInBtn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});




// Validater JS

// Fix email and password in the main input of the sign up and login form 


function emailVerify(event) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (event.target == undefined){
        if(re.test(event)){
            return true
        }
        else {
            return false 
        }
    }
    else {
        let email = event.target.value ;
        if (re.test(email)){
            event.target.style.borderColor = "Green";
        }
        else {
            event.target.style.borderColor = "Red";
        }
    }
} 

function verifyPassword(event) {
    let re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (event.target == undefined){
        if (re.test(event)){
            return true
        }
        else {
            return false
        }
    }
    else {
        let code = event.target.value;
        if (re.test(code)){
            event.target.style.borderColor = "Green"
        }
        else {
            event.target.style.borderColor = "Red"
        }
    }

}

function matchPassword(event) {
    let pw = document.getElementById("passwordSignUp").value;
    if (event.target == undefined){
        if (event == pw){
            return true
        }
        else {
            return false 
        }

    }
    else {
        let confPw = event.target.value;
        if(confPw == pw){
            event.target.style.borderColor = "Green"
        }
        else {
            event.target.style.borderColor = "Red"
        }
    }
}

// function verifyPhoneNumber(event) {
//     if (event.target == undefined){
//         if (event.length == 10){
//             return true
//         }
//         else {
//             return false
//         }
//     }
//     else {
//         if(event.target.value.length == 10){
//             event.target.style.borderColor = "Green"
//         }
//         else {
//             event.target.style.borderColor = "Red"
//         }
//     }
// }

function nameValidate(event) {
    if (event.target == undefined){
        if (event.length > 0){
            return true
        }
        else {
            return false
        }
    }
    else {
        if(event.target.value.length > 0){
            event.target.style.borderColor = "Green"
        }
        else {
            event.target.style.borderColor = "Red"
        }
    }
} 


function validation() {
    let status = [];
    //email
    if (emailVerify(document.getElementById("email").value)){
        status.push("true");
    }
    else{
        status.push("false");
        let email = document.getElementById("email");
        email.classList.add("red");
        email.value = "";
        email.style.borderColor = "red";
        email.placeholder = "Please enter valid email id"
    }
    //firstname
    if (nameValidate(document.getElementById("firstName").value)){
        status.push("true");
    }
    else{
        status.push("false");
        let firstName = document.getElementById("firstName");
        firstName.classList.add("red");
        firstName.value = "";
        firstName.style.borderColor = "red";
        firstName.placeholder = "You cannot leave this field empty"
    }
    //lastname
    if (nameValidate(document.getElementById("lastName").value)){
        status.push("true");
    }
    else{
        status.push("false");
        let lastName = document.getElementById("lastName");
        lastName.classList.add("red");
        lastName.value = "";
        lastName.style.borderColor = "red";
        lastName.placeholder = "You cannot leave this field empty"
    }
    //password
    if (verifyPassword(document.getElementById("password").value)){
        status.push("true");
    }
    else{
        status.push("false");
        let password = document.getElementById("password");
        password.classList.add("red");
        password.value = "";
        password.style.borderColor = "red";
        password.placeholder = "You should make strong password"
    }
    //confirmPassword 
    if (matchPassword(document.getElementById("confPassword").value)){
        status.push("true");
    }
    else{
        status.push("false");
        let confPassword = document.getElementById("confPassword");
        confPassword.classList.add("red");
        confPassword.value = "";
        confPassword.style.borderColor = "red";
        confPassword.placeholder = "The password and confirm password field does not matches"
    }
    if (status.includes("false")){
        return false 
    }
    else {
        return true 
    }
}

function fieldReset(event){
    event.target.style.borderColor = "gainsboro";
    event.target.placeholder = "";
}



// document.getElementsByClassName("non-btn")[0].addEventListener('click', (event) => {
//     document.getElementById("signup").style.display = "none";
//     document.getElementById("login").style.display = "block";
// })

// document.getElementsByClassName("non-btn")[1].addEventListener('click', (event) => {
//     document.getElementById("login").style.display = "none";
//     document.getElementById("signup").style.display = "block";
// })

// document.getElementsByClassName("btn")[0].addEventListener("click", (e) => {
//     if (validation()){
//         document.getElementsByTagName("form")[0].submit();
//     }
// } )