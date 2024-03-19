<?php
include 'db.php';

// Get data from the frontend
$assessment_id = $_POST['assessment_id'];
$subject = $_POST['subject'];
$class = $_POST['class'];
$link = $_POST['link'];

// Construct the SQL query to update the assessment data
$sql = "UPDATE assessment 
        SET subject = '$subject', class = '$class', link = '$link'
        WHERE assessment_id = '$assessment_id'";

$result = pg_query($connection, $sql);

if ($result) {
    echo json_encode(['success' => true, 'message' => 'Assessment updated successfully']);
} else {
    echo json_encode(['success' => false, 'error' => pg_last_error($connection)]);
}

pg_close($connection);
?>
