<?php
include 'db.php';

// Get data from the frontend
$subject = $_POST['subject'];
$class = $_POST['class'];
$link = $_POST['link'];
$unique_id = $_POST['encrypted_unique_id']; // Assuming you have a way to identify the user uploading the assessment

// Construct the SQL query to insert the assessment data into the assessment table
$sql = "INSERT INTO assessment (subject, class, link, unique_id) VALUES ('$subject', '$class', '$link', '$unique_id')";

$result = pg_query($connection, $sql);

if ($result) {
    echo json_encode(['success' => true, 'message' => 'Assessment uploaded successfully']);
} else {
    echo json_encode(['success' => false, 'error' => pg_last_error($connection)]);
}

pg_close($connection);
?>
