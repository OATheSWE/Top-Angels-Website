<?php
include 'db.php';

// Get the assessment_id from the frontend
$assessment_id = $_POST['assessment_id'];

// Construct the SQL query to select the individual assessment data
$sql = "SELECT * FROM assessment WHERE assessment_id = '$assessment_id'";
$result = pg_query($connection, $sql);

if ($result) {
    // Fetch the row from the result set
    $row = pg_fetch_assoc($result);
    
    // Send the assessment data as JSON response to frontend
    echo json_encode(['success' => true, 'assessment' => $row]);
} else {
    // Send error response if query fails
    echo json_encode(['success' => false, 'error' => pg_last_error($connection)]);
}

pg_close($connection);
?>
