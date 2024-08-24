// Function to generate a random 4-digit OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

// Function to validate login form
function validateLoginForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!email.includes('@') || !email.includes('.')) {
        alert("Invalid email format. Please enter a valid email address.");
        return false;
    }

    if (password.length < 6) {
        alert("Password should contain at least 6 characters.");
        return false;
    }

    

    // Option 2: Redirect to "Menu.html" manually
    window.location.href = "Menu.html";
    return false; // Use this if you want to prevent the form from submitting and handle navigation manually
}

// Function to send email with verification code
function sendMail() {
    const otp = generateOTP(); // Generate OTP
    let params = {
        name: "Foodiee",
        email: document.getElementById("email").value,
        message: `Your verification code is ${otp}`,
    };
    // Ensure emailjs is initialized before calling send
    if (typeof emailjs === 'undefined') {
        console.error("emailjs is not initialized. Please check your configuration.");
        return;
    }
    emailjs.send("service_yvyrfoh", "template_o7liuhf", params).then(function(response) {
        alert("Email Sent!");
    }).catch(function(error) {
        console.error("Error sending email:", error);
        alert("Error sending email. Please try again later.");
    });
}
