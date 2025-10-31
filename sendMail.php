<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form data collect karo
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Receiver email address (yahan apna email daal)
    $to = "karansprojects227@gmail.com";

    // Email subject and body
    $subject = "New Message from $name";
    $body = "You received a new message from your website:\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Email send karna
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message failed to send!";
    }
}
?>
