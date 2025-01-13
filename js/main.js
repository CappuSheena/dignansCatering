let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.hamburger');
let pushcontent = document.getElementById('pushcontenttoggle');
let spacingbar = document.querySelectorAll('.spacing-bar');
let navitem = document.querySelectorAll('.nav-item')


hamburger.addEventListener('click', () => {
    navbar.classList.toggle("navbar-open");
    hamburger.classList.toggle("hamburger-open");

    // used GPT to help with this line (mostly how to lay it out. Had a problem with JS targeting 1st spacing-bar only)
    spacingbar.forEach(bar => {
        bar.classList.toggle("spacing-bar-open")
    })

    navitem.forEach(item => {
        item.classList.toggle("nav-item-open")
    })
});

navbar.addEventListener('click', () => {
    navbar.classList.remove("navbar-open");
    hamburger.classList.remove("hamburger-open");
});

// FORM VALIDATION

function validateForm(){


    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    username = document.getElementById("username").value.trim();
    email = document.getElementById("email").value.trim();
    message = document.getElementById("message").value.trim();
    
    // Validates there is a name input
    if(username === ""){
        document.getElementById("nameError").textContent = "* Name is required";
        return false;
    }

    // In this RegEx, the forward slash is the beginning, the ^ signifies the content within the slashes. Within the bracket it checks that there is lowercase a-z and uppercase A-Z. the /s checks for a space, the dollar sign signifies the end of checks/regExs, the forward slash represents the end.

    var namePattern = /^[a-zA-Z\s]+$/
    if(!namePattern.test(username)){
        document.getElementById("nameError").textContent = "* Name must contain only letters"
        return false;
    };


    // Validates the email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById("emailError").textContent = "* invalid Email"
        return false;
    }

    if(email === ""){
        document.getElementById("emailError").textContent = "* Please enter an Email"
        return false;
    }

    // Validate message
    if (message === "") {
        document.getElementById("messageError").textContent = "* Message cannot be empty";
        return false;
    }

    console.log("Validation Passed:", { username, email, message });


    saveDataLocally(username, email, message);

    console.log("Redirecting...");

    window.location.href = "confirmation.html";

    return false;
}



function saveDataLocally(username, email, message){
    //This saves the inputs into the browser
    var formData = {
        username: username,
        email: email,
        message: message,
    };

    //Adds to the browsers local storage, known as a JSON string
    localStorage.setItem("formData", JSON.stringify(formData));
 };



 // Pull the data from browsers local storage
let storedData = localStorage.getItem('formData');

// Display the stored data
if (storedData) {
    var parsedData = JSON.parse(storedData);
    document.getElementById('storedusername').textContent = parsedData.username;
    document.getElementById('storedEmail').textContent = parsedData.email;
    document.getElementById('storedMessage').textContent = parsedData.message;
                                                     
}