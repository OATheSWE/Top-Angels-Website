<?php
include 'db.php';

// Get data from the frontend
$assessment_id = $_POST['assessment_id'];

// Construct the SQL query to delete the assessment
$sql = "DELETE FROM assessment WHERE assessment_id = '$assessment_id'";

$result = pg_query($connection, $sql);

if ($result) {
    echo json_encode(['success' => true, 'message' => 'Assessment deleted successfully']);
} else {
    echo json_encode(['success' => false, 'error' => pg_last_error($connection)]);
}

pg_close($connection);
?>
