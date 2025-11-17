// JavaScript function for form validation
function validateForm() {
    // Get the input elements
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if name is empty
    if (name === "") {
        alert("Name is required.");
        return false;
    }

    // Check if email is empty
    if (email === "") {
        alert("Email is required.");
        return false;
    }

    // Check if email format is valid
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If everything is correct, submit the form
    return true;
}
