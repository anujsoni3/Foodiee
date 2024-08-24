function generateOTP() {
    var email = document.forms["forgotPasswordForm"]["email"].value;

    // AJAX request to send email and get OTP from backend
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "forgot_password.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var otp = xhr.responseText;
            console.log("OTP: " + otp); // Log the OTP, in production you'd send it to the user's email

            // Hide email input and generate OTP button
            document.getElementById("email").disabled = true;
            document.getElementById("resetButton").style.display = "none";

            // Show OTP input field and validate OTP button
            document.getElementById("otpContainer").style.display = "block";
        }
    };
    xhr.send("email=" + email);

    return false; // Prevent form submission
}

document.getElementById('validateOTPButton').addEventListener('click', function(event) {
    var enteredOTP = document.getElementById('otp').value;

    // AJAX request to validate OTP
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "validate_otp.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;
            if (response === "success") {
                // If OTP is correct, allow user to reset password
                window.location.href = 'new_password.html';
            } else {
                // If OTP is incorrect, display error message
                alert('Invalid OTP. Please try again.');
            }
        }
    };
    xhr.send("otp=" + enteredOTP);
});