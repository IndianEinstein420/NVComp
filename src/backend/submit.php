<?php
// MUST be at the top of the file with no spaces or newlines before this

$url = "http://localhost:3000/";

// Get form data
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

// File to write to
$file = 'submissions.txt';

// Prepare content
$entry = "Name: $name\nEmail: $email\nMessage: $message\n---\n";

// Write to file and redirect if successful
if (file_put_contents($file, $entry, FILE_APPEND | LOCK_EX)) {
    header("Location: $url");
    exit;
} else {
    // If saving fails, show error (only in this case do we send output)
    echo "<!DOCTYPE html>
    <html>
    <head><title>Error</title></head>
    <body>
    <center><h3>Error saving data to file.</h3></center>
    </body>
    </html>";
}
