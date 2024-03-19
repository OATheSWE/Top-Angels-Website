<?php
include 'db.php';

// Get the unique_id from the frontend
$unique_id = $_POST['encrypted_unique_id'];


// Construct the SQL query to select all student data except for arm based on unique_id
$sql = "SELECT name, class, email, password FROM students WHERE unique_id = '$unique_id'";
$result = pg_query($connection, $sql);

if ($result) {
    // Check if any rows were returned
    if (pg_num_rows($result) > 0) {
        // Fetch the student's data
        $row = pg_fetch_assoc($result);
        $name = $row['name'];
        $class = $row['class'];
        $email = $row['email'];
        $password = $row['password'];

        // Send the student's data as JSON response to frontend
        echo json_encode(['success' => true, 'name' => $name, 'class' => $class, 'email' => $email, 'password' => $password]);
    } else {
        // Send error response if unique_id is not found
        echo json_encode(['success' => false, 'error' => 'Student data not found']);
    }
} else {
    // Send error response if query fails
    echo json_encode(['success' => false, 'error' => pg_last_error($connection)]);
}

pg_close($connection);
?>
