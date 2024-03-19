<?php
include 'db.php';

// Get the unique_id from the frontend
$unique_id = $_POST['encrypted_unique_id'];

// Construct the SQL query to select all rows from the assessment table
$sql = "SELECT assessment_id, subject, class, link FROM assessment WHERE unique_id = '$unique_id'";
$result = pg_query($connection, $sql);

if ($result) {
    $assessments = array();
    // Fetch each row from the result set
    while ($row = pg_fetch_assoc($result)) {
        // Add the subject, class, link, and assessment_id to the assessments array
        $assessments[] = array(
            'id' => $row['assessment_id'],
            'subject' => $row['subject'],
            'class' => $row['class'],
            'link' => $row['link']
        );
    }
    
    // Send the assessments array as JSON response to frontend
    echo json_encode(['success' => true, 'assessments' => $assessments]);
} else {
    // Send error response if query fails
    echo json_encode(['success' => false, 'error' => pg_last_error($connection)]);
}

pg_close($connection);
?>
