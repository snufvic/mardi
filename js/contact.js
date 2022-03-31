//Create Variabels for the form input , and the form
const form = document.querySelector("form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const textarea = document.querySelector("#textarea");

//One function for all the form fields

function showError(input, message) {
    const formControll = input.parentElement;
    formControll.className = "formControll error";
    const small = formControll.querySelector('small');
    small.innerText = message;
}
//One function for all the form fields

function showSuccess(input) {
    const formControll = input.parentElement;
    formControll.className = "formControll success";
}

//prevent the Submit
form.addEventListener('submit', function (e) {

    //check the form fields with the function 

    if (firstname.value == "") {
        e.preventDefault();
        showError(firstname, "Please Enter First Name");

    } else {
        showSuccess(firstname);
    }
    if (lastname.value == "") {
        e.preventDefault();
        showError(lastname, "Please Enter Last Name");
    } else {
        showSuccess(lastname);
    }
    if (email.value == "" || email.value.indexOf('@') == -1) {
        e.preventDefault();
        showError(email, "Please Enter a Correct Email");
    } else {
        showSuccess(email);
    }
    if (textarea.value == "") {
        e.preventDefault();
        showError(textarea, "Please Enter Your Message");
    } else {
        showSuccess(textarea);
    }

});