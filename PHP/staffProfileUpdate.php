<?php
include 'db.php';

// Get the unique_id from the frontend
$unique_id = $_POST['encrypted_unique_id'];

// Get updated data from the frontend
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Construct the SQL query to update the student's data
$sql = "UPDATE staff SET name = '$name', email = '$email', password = '$password' WHERE unique_id = '$unique_id'";
$result = pg_query($connection, $sql);

if ($result) {
    echo json_encode(['success' => true, 'message' => 'Profile updated successfully']);
} else {
    echo json_encode(['success' => false, 'error' => pg_last_error($connection)]);
}

pg_close($connection);
?>
