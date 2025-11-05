<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data safely
    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $phone   = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service']);
    $message = htmlspecialchars($_POST['message']);
    
    // Get the page the form was submitted from
    $redirectPage = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '/';

    // Create email body
    $body = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Service Interested In:</strong> {$service}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    // Initialize PHPMailer
    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@cfocraft.com';  // your Gmail
        $mail->Password   = 'uhuxswxkvihsnuub';             // app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Email details
        $mail->setFrom('info@cfocraft.com', 'Website Contact');
        $mail->addAddress('info@cfocraft.com', 'Admin');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(true);
        $mail->Subject = "New Inquiry from $name";
        $mail->Body    = $body;

        // Send email
        $mail->send();

        // ✅ Success page with dynamic redirect
        echo "
        <html>
        <head>
            <script>
                setTimeout(function() {
                    window.location.href = '$redirectPage';
                }, 3000); // redirect after 3 seconds
            </script>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                .message-box {
                    background: #fff;
                    padding: 30px 40px;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                    text-align: center;
                }
                h2 {
                    color: #2ecc71;
                }
                p {
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class='message-box'>
                <h2>✅ Message Sent Successfully!</h2>
                <p>You will be redirected back shortly...</p>
            </div>
        </body>
        </html>
        ";

    } catch (Exception $e) {
        echo "❌ Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid Request.";
}
?>
