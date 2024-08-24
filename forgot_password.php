<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming you have a database connection
    // Replace 'your_db_host', 'your_db_user', 'your_db_password', and 'your_db_name' with your actual database credentials
    $conn = new mysqli('your_db_host', 'your_db_user', 'your_db_password', 'your_db_name');

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Generate OTP
    $email = $_POST['email'];
    $otp = mt_rand(1000, 9999); // Generate a random 4-digit OTP

    // Store OTP in the database
    $sql = "INSERT INTO otps (email, otp) VALUES ('$email', '$otp')";
    if ($conn->query($sql) === TRUE) {
        // OTP stored successfully
        // You would typically send the OTP to the user's email here

        // For demonstration, we'll just return the OTP
        echo $otp;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>