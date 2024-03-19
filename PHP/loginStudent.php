<?php
include 'db.php';

$name = $_POST['name'];
$password = $_POST['password'];

// Construct the SQL query to select based on name and password, but only retrieve the unique_id
$sql = "SELECT unique_id FROM students WHERE name = '$name' AND password = '$password'";
$result = pg_query($connection, $sql);

if ($result) {
    // Check if any rows were returned
    if (pg_num_rows($result) > 0) {
        // Fetch the unique_id
        $row = pg_fetch_assoc($result);
        $unique_id = $row['unique_id'];
        
        // Send the success response along with unique_id to frontend
        echo json_encode(['success' => true, 'unique_id' => $unique_id]);
    } else {
        echo json_encode(['success' => false]);
    }
} else {
    echo json_encode(['success' => false, 'error' => pg_last_error($connection)]);
}

pg_close($connection);
?>
