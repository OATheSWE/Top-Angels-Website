<?php
include 'db.php';

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Generate a unique four-digit identifier
$unique_id = str_pad(rand(0, 9999), 4, '0', STR_PAD_LEFT);

$sql = "INSERT INTO staff (name, email, password, unique_id) VALUES ('$name', '$email', '$password', '$unique_id')";

if (pg_query($connection, $sql)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => pg_last_error($connection)]);
}

pg_close($connection);
?>
